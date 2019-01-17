const path = require('path');
const { watch: _watch } = require('fs');
const { exec:_exec } = require('child_process');
const { promisify } = require('util');

const watch = (dir) => ({
        onChange: (onChanged) => {
            _watch(path.resolve(__dirname, dir), { recursive: true}, onChanged);
        }
    });

const createMatcher = (pattern) => (new RegExp(pattern,'gim'));

const exec = promisify(_exec);

const executeTests = () => {
    return exec('npm t -- --useStderr')
        .then((result) => {
            const { stderr } = result;
            if(stderr)
                console.log(stderr);
            return stderr;
        })
};

const commit = (filePath) => () => (exec(`git add ${filePath} && git commit -m 'WIP: on ${filePath} @ ${new Date().toISOString()}'`));

const rollback = (filePath) => (testsFailed) => {
    console.log(`${testsFailed.stderr}`);
    return exec(`git checkout HEAD ${filePath}`)
        .then((rollbackResult) => {
            console.log(rollbackResult.stdout);
            return rollbackResult;
        })
        .catch(console.log)

};

watch('./src')
    .onChange((eventType, filePath) => {
        const matcher = createMatcher('^((?!test).)*tsx?$');
        const matched = matcher.test(filePath);
        if(matched){
            console.log(`FILECHANGE: ${!!filePath ? filePath : ''} (${eventType})\n`);

            executeTests()
                .then(commit(filePath))
                .catch(rollback(filePath))
        }
    });

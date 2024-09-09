const { execSync } = require('child_process');
const os = require('os');
const platform = os.platform();
let args = process.argv[2] === '--dev' ? process.argv.slice(3).concat('--dev') : process.argv.slice(2);
execSync((platform === 'win32' ? 'build_customize.sh' : './build_customize.sh') + ' ' + args.join(' '), {stdio: 'inherit'}); // for bash script cross-platform run
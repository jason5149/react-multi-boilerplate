const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const dirName = path.basename(this.destinationPath())
    console.log(dirName);
    const prompts = [
      {
        type: 'input',
        name: 'appName',
        default: dirName,
        message: '请输入项目名称',
      },
      {
        type: 'list',
        name: 'templateName',
        message: '请选择模板',
        choices: ['react-antd-mobx-webpack', 'react-mobx-webpack', 'react-typescript-mobx-webpack'],
      },
    ];

    return this.prompt(prompts).then(answers => {
      console.log(answers);
      this.answers = answers;
    });
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false,
    });
  }

  end() {
    this.log('\n', chalk.bold('您可以启动项目了！'));
  }
}
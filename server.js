const app = require('./app');
const chalk = require('chalk');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(chalk.greenBright(`Server start on port ${PORT}`));
})
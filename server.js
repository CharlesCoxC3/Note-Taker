const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/api')(app);
require('./routes/html')(app);

app.listen(PORT, () => {
  console.log(`Server listening at localhost${PORT}`);
});

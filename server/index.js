import express from 'express';

const app = express();

app.listen(3366, () => {
    console.log('PFI is up and running...');
});
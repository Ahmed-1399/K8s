// set up a basic Express server
import express from 'express'
import os from 'os'

// const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // ` ذ
    const message= `Hello World!, Deploy Node JS in K8s, Iam Pod ${os.hostname()} : version 1.2.0`; 
    res.send(message)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(os.hostname())
});

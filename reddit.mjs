#! /usr/bin/env node

import yargs from 'yargs';
import open from 'open';
import fetch from 'node-fetch';


const { argv } = yargs(process.argv);

const response = await fetch('https://reddit.com/.json');

const data = await response.json();

const children = data.data.children

const randomPost = children[Math.floor(Math.random() * children.length)];

const link = `https://reddit.com${randomPost.data.permalink}`;

if(argv.print) {
    console.log(`
    title: ${randomPost.data.title}
    link: ${link}`)
}

else {
    open(link);
}
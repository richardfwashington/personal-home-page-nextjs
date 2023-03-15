import React from 'react'


export default async function Office({ params }: { params: { cats: number } }) {

    const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.cats}`);
    const articleJson = await article.json();
    const title = articleJson.title;
    const body = articleJson.body;

    return (
        <>
            <h1>Welcome to TaxAssist</h1>
            <p>This is for the {title}</p>
            <p>{body}</p>
        </>);
}


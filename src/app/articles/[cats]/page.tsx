import GoHome from '../../goHome'

export default async function Office({ params }: { params: { cats: number } }) {

    const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.cats}`);
    const articleJson = await article.json();
    const title = articleJson.title;
    const body = articleJson.body;

    return (
        <>
            <div className='grid grid-cols-10 sm:grid-cols-4'>
                <div></div>
                <article className='col-span-8 sm:col-span-2'>

                    <h2 className='pt-5'>
                        This is for the {title}</h2>
                    <p className='pb-5'>{body}</p>

                    <GoHome name="Go home" />
                </article>
            </div>
        </>);
}


import Link from 'next/link'

export default function Home() {
    return (
        <div className="info">
            -Hello.<br />
            -Hello.<br />
            -Can you tell me what’s happened?<br />
            -No, sorry.<br />
            -But something’s happened.<br />
            -It’s an error. That’s all I know.<br />
            -Really?<br />
            -Yes.<br />
            -Can’t it be fixed?<br />
            -As I said, that’s all I know. Something went wrong. Our engineers have been informed.<br />
            -The engineers? Since when is this a problem for engineers? And anyway, what engineers are you talking about? Some kind of collective?<br />
            -Actually, I think the problem is that you didn’t send the completed request on time.<br />
            -The request? What request?!<br />
            -We’re very sorry for any inconvenience we may have caused you. Thanks for noticing.<br />
            -I don’t get this at all.<br />
            -Things will be back to normal soon.<br />
            -Do you promise?<br />
            -Yes, I promise.<br />
            -Thank you. Goodbye.<br />
            -Come back again soon. Goodbye.<br /><br />
            <Link href="/" scroll={false}>Art</Link>
        </div>

    )
}
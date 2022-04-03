
import Link from "next/link";
import Image from "next/image";


export default function Event({event, featuredMedia}) {
    return (
        <div className="card mb-3" style={{width: "18rem"}}>
            <Link href={`/events/${event.slug}`}>
                <a>
                    <Image src={featuredMedia["media_details"].sizes.medium["source_url"]} width={288} height={190} alt={featuredMedia["alt_text"]} className="card-img-top"/>
                </a>
            </Link>
            <div class="px-6 pt-4 pb-2">
                <h5 className="card-title">{event.title.rendered}</h5>
            <div className="card-text" dangerouslySetInnerHTML={{__html: event.excerpt.rendered}}></div>
                <p className="card-text"><small className="text-muted">{(event.acf.date)}</small></p>
                <Link href={`/events/${event.slug}`}>
                    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">See more</a>
                </Link>
            </div>
        </div> 
    )
}


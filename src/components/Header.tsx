export interface LayoutProps{
    title: string
}

export default function Header(props: LayoutProps){
    return(
        <div className="flex">
            <section className="flex-1 p-5 bg-blue-400 text-white font-bold text-2xl rounded-md">
                {props.title}
            </section>
        </div>
    )
}


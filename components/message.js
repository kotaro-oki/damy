

export default function Message ({message}) {
    return(
        <div>
            <p>{message.name}:{message.content}</p>
        </div>
    )
}
import { Link } from "react-router-dom";

const MailboxList = (props) => {
    console.log(props.mailboxes)
    return (
        <>
            <li>
                {/* <Link to={`/mailboxes/${mailboxes._id}`}>
                    {props.mailboxes.boxSize}
                    {props.mailboxes.boxHolder}
                </Link> */}
                
            </li>
        </>
    )
}

export default MailboxList;
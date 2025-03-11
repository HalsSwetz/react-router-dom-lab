import { useParams } from 'react-router';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedMailbox = mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));
    if (!selectedMailbox) {
        return <h2>Mailbox Not Found!</h2>;
    }
    return (
        <>
            <h2>Mailbox Number:{selectedMailbox._id}</h2>
            <dl>
                <dt>Owner:</dt>
                <dd>{selectedMailbox.boxOwner}</dd>
                <dt>Size:</dt>
                <dd>{selectedMailbox.boxSize}</dd>
            </dl>
        </>
    );

};

export default MailboxDetails;
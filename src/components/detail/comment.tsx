import React from 'react';
import './comment.scss'

interface CommentProps {
    avatarSrc: string;
    name: string;
    date: string;
    content: string;
}

const Comment: React.FC<CommentProps> = ({
    avatarSrc,
    name,
    date,
    content,
}) => {
    return (
        <div className="media g-mb-30 media-comment" style={{ display: 'flex' }}>
            <img
                className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                src={avatarSrc}
                alt="Image Description"
            />
            <div className="media-body u-shadow-v18 g-bg-secondary" style={{padding: '10px 15px',borderRadius: '8px'}}>
                <div className="g-mb-15">
                    <h5 className="h5 g-color-gray-dark-v1 mb-0">{name}</h5>
                    <span className="g-color-gray-dark-v4 g-font-size-12">{date}</span>
                </div>
                <p className='mb-0'>{content}</p>
            </div>
        </div>
    );
};

const CommentSection: React.FC = () => {
    const commentsData = [
        {
            avatarSrc: "https://bootdey.com/img/Content/avatar/avatar7.png",
            name: "John Doe",
            date: "5 days ago",
            content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin",
        },
        {
            avatarSrc: "https://bootdey.com/img/Content/avatar/avatar1.png",
            name: "John Doe",
            date: "5 days ago",
            content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
        },
        {
            avatarSrc: "https://bootdey.com/img/Content/avatar/avatar1.png",
            name: "John Doe",
            date: "5 days ago",
            content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
        },
        {
            avatarSrc: "https://bootdey.com/img/Content/avatar/avatar1.png",
            name: "John Doe",
            date: "5 days ago",
            content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
        },
    ];

    return (
        <div className="container">
            <div className="row" style={{ justifyContent: 'center' }}>
                {commentsData.map((comment, index) => (
                    <React.Fragment key={index}>
                        {index % 2 === 0 && <div className="w-100"></div>}
                        <div className="col-md-6">
                            <Comment {...comment} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;

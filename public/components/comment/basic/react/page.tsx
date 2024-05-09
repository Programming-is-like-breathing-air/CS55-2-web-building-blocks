import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "../../../../../styles/components/ui/card";
import { Button } from "../../../../../styles/components/ui/button";
import { useToast } from "../../../../../styles/components/ui/toast/use-toast";
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { Avatar, AvatarImage } from '../../../../../styles/components/ui/avatar';
import { Label } from '../../../../../styles/components/ui/label';
import { Textarea } from "../../../../../styles/components/ui/textarea"


export function BasicComment() {
    const initialMessages = [
        {
            user: "USYD Student 1",
            avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
            description: "I am the student of USYD and majoring in Master of Computer Science.",
            content: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
            likes: 156,
            comments: 156,
            shares: 2
        },
        {
            user: "USYD Student 2",
            avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
            description: "I am the student of USYD and majoring in Master of Computer Science.",
            content: "Education for all, leadership for good. Progressive thinking, breaking with convention, challenging the status quo and improving the world around us is in our DNA.",
            likes: 156,
            comments: 156,
            shares: 2

        },
        {
            user: "USYD Student 3",
            avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
            description: "I am the student of USYD and majoring in Master of Computer Science.",
            content: "The stars change, the mind remains the same.",
            likes: 156,
            comments: 156,
            shares: 2
        },
        {
            user: "USYD Student 4",
            avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
            description: "I am the student of USYD and majoring in Master of Computer Science.",
            content: "The stars change, the mind remains the same.",
            likes: 156,
            comments: 156,
            shares: 2
        }
    ];

    const [messages, setMessages] = useState(initialMessages);
    const [activeTextarea, setActiveTextarea] = useState(null);
    const [commentText, setCommentText] = useState(Array(initialMessages.length).fill("")); // Initialize an array for comment texts
    const { toast } = useToast();

    const incrementStat = (index, stat) => {
        const newMessages = [...messages];
        if (stat === 'comments') {
            setActiveTextarea(activeTextarea === index ? null : index); // Toggle textarea visibility
            setCommentText(Array(initialMessages.length).fill("")); // Reset the comment text
        } else {
            newMessages[index][stat]++;
            setMessages(newMessages);
        }
    };

    const handleCommentChange = (text, index) => {
        const newCommentText = [...commentText];
        newCommentText[index] = text;
        setCommentText(newCommentText);
    };

    const postComment = (index) => {
        if (commentText[index].trim()) {
            toast({
                title: "You have successfully post your comment:",
                description: `${commentText[index]}`,
            });

            const newMessages = [...messages];
            newMessages[index].comments++;
            setMessages(newMessages);

            // Close the textarea
            setActiveTextarea(null);

            // Clear the textarea
            const newCommentText = [...commentText];
            newCommentText[index] = '';
            setCommentText(newCommentText);
        }
    };

    const handleClose = () => {
        setActiveTextarea(null); // Close the textarea
        setCommentText(Array(initialMessages.length).fill(""));
    };

    return (
        <>
            <Toaster />
            <div>
                {messages.map((message, index) => (
                    <Card key={index} className="mb-4">
                        <CardHeader className="flex flex-col p-4" style={{ borderBottom: '1px solid #e8e8e8' }}>
                            <div className="flex items-center mb-2">
                                <Avatar style={{ marginRight: '10px' }}>
                                    <AvatarImage src={message.avatarUrl} alt={message.user} />
                                </Avatar>
                                <div className="flex flex-col">
                                    <Label style={{ fontWeight: 'bold', fontSize: '1rem' }}>{message.user}</Label>
                                </div>
                            </div>
                            <div className="flex flex-col" style={{ marginLeft: '50px' }}>
                                <Label style={{ fontSize: '0.9rem', color: 'gray' }}>{message.description}</Label>
                            </div>
                        </CardHeader>
                        <CardContent>

                            <div className="text-left" style={{ fontSize: '0.875rem', marginTop: '20px', marginBottom: '10px' }}>{message.content}</div>
                            <div className="flex mt-2 justify-left text-sm text-gray-400 space-x-2">
                                <Button variant='link' onClick={() => incrementStat(index, 'likes')}>
                                    {message.likes} Likes
                                </Button>
                                <Button variant='link' onClick={() => incrementStat(index, 'comments')}>
                                    {message.comments} Comments
                                </Button>
                                <Button variant='link' onClick={() => incrementStat(index, 'shares')}>
                                    {message.shares} Shares
                                </Button>
                            </div>
                            {activeTextarea === index && (
                                <div className="grid w-full gap-2 mt-2">
                                    <Textarea value={commentText[index]} placeholder="Type your comment here." onChange={(e) => handleCommentChange(e.target.value, index)} />
                                    <div className="flex justify-end space-x-2">
                                        <Button onClick={handleClose} variant='secondary'>Close</Button>
                                        <Button onClick={() => postComment(index)} variant='default' disabled={!commentText[index].trim()}>
                                            Post Comment
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}



export default BasicComment;





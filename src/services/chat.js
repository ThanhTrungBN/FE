const mockData = () => {
    const chatId = "1";
    const data = [
        {
            question: "Bố tôi tên là gì",
            answer: "Bố bạn tên là Vương",
        },
        {
            question: "hello",
            answer: "Tôi có thể giúp bạn với nhiều thứ, từ việc trả lời câu hỏi đến hỗ trợ học tập.",
        },
        {
            question: "Hôm nay là ngày nào?",
            answer: "Hôm nay là một ngày tuyệt vời để học hỏi điều gì đó mới mẻ!",
        },
    ];
    
    return {
        id: chatId,
        messages: data,
    };
};
export default mockData
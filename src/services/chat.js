const mockData = () => {
    const chatId = "1"; // Tạo ID duy nhất
    const data = [
        {
            question: "Bạn có khỏe không?",
            answer: "Tôi khỏe, cảm ơn bạn! Còn bạn thì sao?",
        },
        {
            question: "Bạn có thể làm gì?",
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
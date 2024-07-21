
const faqs = [
    {
        question: 'How do I create an account?',
        answer: 'To create an account, go to the signup page and follow the instructions.'
    },
    {
        question: 'What is Indie Game Hub?',
        answer: 'Indie Game Hub is a platform for indie game developers to share and discover new games.'
    },
];

function FAQPage() {
    return (
        <div className="max-w-4xl mx-auto p-4 font-body min-h-screen">
            <h1 className="text-4xl text-center font-display mb-8">FAQs</h1>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index} className="mb-5">
                        <h2 className="text-xl text-primary mb-2">{faq.question}</h2>
                        <p className="bg-text text-primary p-4 rounded-lg shadow">{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FAQPage;
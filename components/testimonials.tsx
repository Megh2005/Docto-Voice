import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Aarav",
        username: "@aarav_m",
        body: "The AI assistant listened to my symptoms carefully and suggested accurate treatment. Great experience!",
        img: "https://avatar.vercel.sh/aarav",
    },
    {
        name: "Priya",
        username: "@priya.s",
        body: "I received a prescription within minutes. It's like consulting a real doctor, but faster!",
        img: "https://avatar.vercel.sh/priya",
    },
    {
        name: "Rohan",
        username: "@rohan_dev",
        body: "Very intuitive and helpful. Saved me the trouble of going to the clinic for a simple fever.",
        img: "https://avatar.vercel.sh/rohan",
    },
    {
        name: "Anjali",
        username: "@anjali.v",
        body: "Got quick consultation for my migraine and the recommended medicine worked perfectly.",
        img: "https://avatar.vercel.sh/anjali",
    },
    {
        name: "Dev",
        username: "@dev.kumar",
        body: "As someone living in a remote area, this app is a blessing. AI consultation anytime!",
        img: "https://avatar.vercel.sh/dev",
    },
    {
        name: "Meera",
        username: "@meera_me",
        body: "Got my blood report analyzed and the insights were clear and actionable.",
        img: "https://avatar.vercel.sh/meera",
    },
    {
        name: "Kunal",
        username: "@kunal_93",
        body: "I was skeptical at first, but the AI's diagnosis matched my doctor's word for word.",
        img: "https://avatar.vercel.sh/kunal",
    },
    {
        name: "Simran",
        username: "@simran.kh",
        body: "Convenient and fast! I had a prescription delivered to my email in 3 minutes.",
        img: "https://avatar.vercel.sh/simran",
    },
    {
        name: "Abhay",
        username: "@abhay.iit",
        body: "As a student, this app helps when I can’t visit a doctor. Great use of tech!",
        img: "https://avatar.vercel.sh/abhay",
    },
    {
        name: "Sneha",
        username: "@sneha_rx",
        body: "Detailed, polite, and smart – the AI felt human. Impressive medical support.",
        img: "https://avatar.vercel.sh/sneha",
    },
    {
        name: "Vikram",
        username: "@vikram_b",
        body: "No waiting, no queues. Got a solid diagnosis and verified medicine list instantly.",
        img: "https://avatar.vercel.sh/vikram",
    },
    {
        name: "Tanya",
        username: "@tanya.m",
        body: "Loved the clean UI and the clarity of response. AI is truly revolutionizing healthcare.",
        img: "https://avatar.vercel.sh/tanya",
    },
    {
        name: "Arjun",
        username: "@arjun.ai",
        body: "I use it to monitor my parents' health remotely. Makes me feel more in control.",
        img: "https://avatar.vercel.sh/arjun",
    },
    {
        name: "Pooja",
        username: "@pooja_29",
        body: "Very comforting to get immediate answers. The callback option is also great.",
        img: "https://avatar.vercel.sh/pooja",
    },
    {
        name: "Yash",
        username: "@yash.09",
        body: "I received a complete prescription and advice for home care. Worked perfectly.",
        img: "https://avatar.vercel.sh/yash",
    },
    {
        name: "Isha",
        username: "@isha.k",
        body: "Had a cold and cough – the AI asked all the right questions and gave quick support.",
        img: "https://avatar.vercel.sh/isha",
    },
    {
        name: "Rahul",
        username: "@rahul.r",
        body: "This service feels professional. I didn’t expect an AI to feel this reliable.",
        img: "https://avatar.vercel.sh/rahul",
    },
    {
        name: "Neha",
        username: "@neha.27",
        body: "AI gave a diagnosis, follow-up plan, and medicine list. Feels like a real clinic visit.",
        img: "https://avatar.vercel.sh/neha",
    },
    {
        name: "Aman",
        username: "@aman_live",
        body: "Perfect for late night health worries. Got proper support without leaving bed.",
        img: "https://avatar.vercel.sh/aman",
    },
    {
        name: "Sanjana",
        username: "@sanjana",
        body: "My kid was unwell and this app gave instant help. Very useful for parents.",
        img: "https://avatar.vercel.sh/sanjana",
    },
    {
        name: "Raj",
        username: "@raj_delhi",
        body: "Very quick service. Prescription matched my regular physician's advice.",
        img: "https://avatar.vercel.sh/raj",
    },
    {
        name: "Diya",
        username: "@diya_vr",
        body: "AI was friendly and supportive. Gave me steps to recover fast from stomach flu.",
        img: "https://avatar.vercel.sh/diya",
    },
    {
        name: "Nikhil",
        username: "@nikhil.dev",
        body: "Even helped me decide whether to go to hospital or manage at home. Smart tool.",
        img: "https://avatar.vercel.sh/nikhil",
    },
    {
        name: "Shruti",
        username: "@shruti_b",
        body: "Recommended over-the-counter medicine and it worked. Very helpful!",
        img: "https://avatar.vercel.sh/shruti",
    },
    {
        name: "Harsh",
        username: "@harshg",
        body: "Fast response, no ads, and to-the-point advice. I trust this more than Google.",
        img: "https://avatar.vercel.sh/harsh",
    },
    {
        name: "Ayesha",
        username: "@ayesha_",
        body: "It remembered my last checkup and gave better suggestions this time. Wow.",
        img: "https://avatar.vercel.sh/ayesha",
    },
    {
        name: "Kartik",
        username: "@kartik_ai",
        body: "Made me feel heard and cared for. Smartest healthcare bot I’ve used.",
        img: "https://avatar.vercel.sh/kartik",
    },
    {
        name: "Ritika",
        username: "@ritika.x",
        body: "Got a prescription after a full symptom check. This is the future of care!",
        img: "https://avatar.vercel.sh/ritika",
    },
    {
        name: "Suresh",
        username: "@suresh_7",
        body: "Good for small issues like throat pain or fatigue. Highly recommended.",
        img: "https://avatar.vercel.sh/suresh",
    },
    {
        name: "Lavanya",
        username: "@lavanya",
        body: "Detailed health advice and clear steps. I felt confident using it.",
        img: "https://avatar.vercel.sh/lavanya",
    }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export default function Testimonials() {
    return (
        <div className="relative flex w-full mb-10 flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:120s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function Demo() {
    return (
        <div className="relative">
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube-nocookie.com/embed/kq6L0v7dw-s?si=BzvkfCCdFfSyeTOI&amp;controls=0"
                thumbnailSrc="/thumbnail.png"
                thumbnailAlt="Hero Video"
            />
        </div>
    );
}

import { permanentRedirect } from "next/navigation";

const WHIP_SCHOOL_PAGE = "https://walnuthillseagles.com/departments/fine-arts/music-parents-whip/";

export default function Home() {
  permanentRedirect(WHIP_SCHOOL_PAGE);
}

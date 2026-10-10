/** Retired WHIP site: permanently forward every request to the official school page. */
const WHIP_SCHOOL_PAGE = "https://walnuthillseagles.com/departments/fine-arts/music-parents-whip/";

export default {
  async fetch(): Promise<Response> {
    return Response.redirect(WHIP_SCHOOL_PAGE, 308);
  },
};

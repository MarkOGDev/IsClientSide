declare class IsClientSide {
    /**
     * Returns True if Window Is available.
     */
    static windowAvailable(): boolean;
    /**
     * Returns True if Document is Available.
     */
    static documentAvailable(): boolean;
    /**
     * Returns True if all our client side checks are true.
     * Currently Checks for Window and Document.
     */
    static true(): boolean;
    /**
     * Returns True if any of our client side check fail.
     */
    static false(): boolean;
}
export { IsClientSide };

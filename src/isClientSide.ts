 

class IsClientSide { 
      
     
    /** 
     * Returns True if Window Is available 
     */
    static windowAvailable(): boolean {
        const windowAvailable = (typeof window !== "undefined" && window !== null) ? true : false;
        console.log('IsClientSide WindowAvailable()', windowAvailable);
        return windowAvailable;
    }


    /**
     * Returns True if Document is Available
     */
    static documentAvailable(): boolean {
        const documentAvailable = (typeof document !== "undefined" && document !== null) ? true : false;
        console.log('IsClientSide DocumentAvailable()', documentAvailable);
        return documentAvailable;

    }

    /**
     * Returns True if all our client side checks are true.
     * Currently Checks for Window and Document. 
     */
    static true(): boolean {
        return IsClientSide.windowAvailable() && IsClientSide.documentAvailable();
    }

    /**
     * Returns True if any of our client side check fail.
     */
    static false(): boolean {
        return (!IsClientSide.true());
    }

} 


export { IsClientSide } 
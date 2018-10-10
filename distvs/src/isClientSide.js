"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IsClientSide = /** @class */ (function () {
    function IsClientSide() {
    }
    /**
     * Returns True if Window Is available
     */
    IsClientSide.windowAvailable = function () {
        var windowAvailable = (typeof window !== "undefined" && window !== null) ? true : false;
        console.log('IsClientSide WindowAvailable()', windowAvailable);
        return windowAvailable;
    };
    /**
     * Returns True if Document is Available
     */
    IsClientSide.documentAvailable = function () {
        var documentAvailable = (typeof document !== "undefined" && document !== null) ? true : false;
        console.log('IsClientSide DocumentAvailable()', documentAvailable);
        return documentAvailable;
    };
    /**
     * Returns True if all our client side checks are true.
     * Currently Checks for Window and Document.
     */
    IsClientSide.true = function () {
        return IsClientSide.windowAvailable() && IsClientSide.documentAvailable();
    };
    /**
     * Returns True if any of our client side check fail.
     */
    IsClientSide.false = function () {
        return (!IsClientSide.true());
    };
    return IsClientSide;
}());
exports.IsClientSide = IsClientSide;

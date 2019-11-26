sap.ui.define([], function () {
    "use strict";

    return {
        /**
         * formatter for list item highlight status on "DiscontinuedDate":
         * if DiscontinuedDate is not undefined or null, return "Warning" status;
         * otherwise, return "Success" status;
         */  
        fnItemHighlight: function(value){
            if(value){
                return "Warning";
            }else{
                return "Success";
            }
        },

        fnIconPicture: function (value) {
			var sImageUrl,
				sSE = 'se',
				sX = 'x',
				s11 = '11';

			if (value) {
				value = value.toLowerCase();

				if (value.indexOf(sSE) !== -1) {
					sImageUrl = "http://cdn.iphonehacks.com/wp-content/uploads/2016/03/iPhone-SE-1.png";
				}
				if (value.indexOf(sX) !== -1) {
					sImageUrl = "https://tse1.mm.bing.net/th?id=OIP.EpV_rVTaHBn2JxZ_qL_ToQHaHa&pid=Api&rs=1";
				}
				if (value.indexOf(s11) !== -1) {
					sImageUrl = "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Colors_091019_big.jpg.large.jpg";
				}
			}
			return sImageUrl;
		}
    }
}, /* bExport= */ true);
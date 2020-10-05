
class HST {
    static calculate(nAmt) {
        var rc = 0;
        if ( nAmt <= 40922.00) {
            rc = (nAmt - 0.00) * 0.0505 + 0.00;
        }
        else if (nAmt <= 81847.00) {
            rc = (nAmt - 40922.00) * 0.0915 + 2067.00;
        }
        else if (nAmt <= 150000.00) {
            rc = (nAmt - 81847.00) * 0.1116 + 5811.00;
        }
        else if (nAmt <= 220000.00) {
            rc = (nAmt - 150000.00) * 0.1216 + 13417.00;
        }
        else if(nAmt>220000) {
            rc = (nAmt - 220000.00) * 0.1316 + 21929.00;
        }
        else
        {
            rc=0;
        }

        return Number(rc.toFixed(2));
    }

    static CalculateFederal(nAmt) {
        var result = 0;
        if ( nAmt <= 45282.00) {
            result = (nAmt - 0.00) * 0.15 + 0.00;
        }
        else if (nAmt <= 90563.00) {
            result = (nAmt - 45282.00) * 0.205 + 6792.00;
        }
        else if (nAmt <= 140388.00) {
            result = (nAmt - 90563.00) * 0.26 + 16075.00;
        }
        else if (nAmt <= 200000.00) {
            result = (nAmt - 140388.00) * 0.29 + 29029.00;
        }
        else if(nAmt>200000) {
            result = (nAmt - 200000) * 0.33 + 46317.00;
        }
        else
        {
            result=0;
        }
        return Number(result.toFixed(2));
    }
}

module.exports = HST;
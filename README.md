# **Installation**

Using npm:

```
npm i finance-icons-library
```

Note: add --save if you are using npm < 5.0.0

In Node.js:

```
var Icons = require('finance-icons-library');
```

# Documentation

Finance-icons-library can help you fetch icons for most of the payment methods in different sizes and format.Icons can be fetched individually or in bulk format.
 
## Basic Implementation:
```
import Icons from "finance-icons-library";

let [sbiLogo, auLogo] = Icons.getLogos(['sbi', 'au'];
let sbiLogo = Icons.getLogo('sbi');
let banksLogo = Icons.getModesLogos('cardbanks');
```
/**
 * Created by Bhavin on 7/22/2015.
 */

var pdf = require('html-pdf');
var appmodule = require('./app');
const path = require('path');
var report_options = {
    childProcessOptions: {
        env: {
            OPENSSL_CONF: "/dev/null",
        },
    },
    format: "A4",
    orientation: "portrait",
    base: "file://" + path.resolve("./public") + "/",
    localUrlAccess: true,
    width: "22cm",
    height: "1100px",
    border: {
        top: "0.3in",
        right: "0.5in",
        bottom: "0.2in",
        left: "0.5in",
    },
    footer: {
        contents: {
            default: `<div class="footer" style="">
        <div>© Character Arc 2018 - 2022.</div>
        <div>All rights reserved.</div>
        <div style="color: #444; float:right; padding-bottom:2px; ">
        Page
            <span>{{page}} of {{pages}}</span>
        </div>	

      </div>`,
        },
    },
};

exports.printpdf1 = function (req, res) {
    var datas =
    {
        ID: "0",
        "Performance Skills": {
            Grit: [4.774, -0.459479],
            Adaptability: [3.417, -1.65072],
            Conscientiousness: [6.417, 0.634],
            Collaboration: [3.75, -0.334],
            'Self Motivation': [5.036, 0.234],
        },
        "Intellectual Skills": {
            Metacognition: [5.5, -0.139],
            Independency: [3.33, -1.9083],
            "Internal Locus of Control": [5.357, -0.928],
            Initiative: [5.357, -0.10029, -0.5552],
            Curiosity: [4.5, -0.86]
        }
    }
    // nunjucks
    // .configure("public", {
    //     express: app,
    //     autoescape: true,
    // })
    // .render("nunjucks.tmpl.html", {
    //     obj,
    // });
    var renderedHtml = appmodule.env.render('nunjucks.tmpl.html', { datas });
    console.log(renderedHtml);
    pdf.create(renderedHtml, report_options).toStream(function (err, stream) {
        // console.log(stream);
        stream.pipe(res);
    });
};

const obj = {
    ID: 0,
    Grit: [4.774, -0.459479],
    Adaptability: [3.417, -1.65072],
    Conscientiousness: [6.417, 0.634],
    'Self Motivation': [5.036, 0.234],
    Collaboration: [3.75, -0.334],
    Metacognition: [5.5, -0.139],
    Independency: [3.33, -1.9083],
    "Internal Locus of Control": [5.357, -0.928],
    Initiative: [5.357, -0.10029, -0.5552],
    Curiosity: [4.5, -0, 86]
}
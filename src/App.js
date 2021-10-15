import React, { Component } from "react";
import "./styles.css";
import "./froala-pages/css/froala_pages.min.css";

export default class Page extends Component {
  componentDidMount() {
    var d = document,
      s1 = d.createElement("script");
    s1.src = `./froala-pages/js/froala_pages.min.js`;
    s1.async = false;
    s1.defer = true;
    s1.onload = function () {
      var s2 = d.createElement("script");
      s2.src = `./froala-pages/js/pages_design_blocks_pkgd.min.js`;
      s2.async = false;
      s2.defer = true;
      s2.onload = function () {
        window.pages = new window.FroalaPages("selector-id", {
          pageLeftButtons: [
            ["edit", "layout"],
            ["desktop", "tablet_landscape", "tablet_portrait", "phone"]
          ],
          //pageCenterButtons: [],
          key: " your key  ", //Place your key after downloading from https://froala.com/pages
          editorOptions: {
            attribution: false,
            pluginsEnabled: [
              "codeView",
              "draggable",
              "file",
              "fontAwesome",
              "fontFamily",
              "fontSize",
              "fullscreen",
              "imageManager",
              "inlineStyle",
              "inlineClass",
              "lineHeight",
              "lists",
              "table",
              "video",
              "imageTUI"
            ],
            toolbarButtons: [
              "html",
              "underline",
              "formatUL",
              "formatOL",
              "insertTable",
              "insertVideo",
              "insertFile"
            ],
            imageEditButtons: ["imageTUI"],
            imageUploadParam: "image_param",
            // Set the image upload URL.
            imageUploadURL:
              "../../handlers/ImportFileHandler.ashx?mode=pages&type=image",
            //imageUploadURL:"",
            // Additional upload params.
            imageUploadParams: { id: "editor", shelfid: "" },
            // Set request type.
            imageUploadMethod: "POST",
            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,
            // Allow to upload PNG and JPG.
            imageAllowedTypes: ["png", "jpg", "jpeg"],
            events: {
              "image.uploaded": function (response) {
                // Do something here.
                // this is the editor instance.
                console.log(this);
              },
              "image.inserted": function ($img, response) {
                // Do something here.
                // this is the editor instance.
                console.log(this);
              }
            },
            designStylesheets: [
              "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
              "https://cdn.jsdelivr.net/gh/froala/design-blocks@master/dist/css/froala_blocks.min.css",
              "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
              "https://cdnjs.cloudflare.com/ajax/libs/froala-editor/3.1.1/css/froala_style.min.css",
              "https://cdnjs.cloudflare.com/ajax/libs/froala-editor/3.1.1/css/froala_editor.pkgd.min.css",
              "https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/tui-image-editor.css",
              "https://uicdn.toast.com/tui-color-picker/latest/tui-color-picker.css",
              "https://cdn.jsdelivr.net/npm/froala-editor@3.1.1/css/third_party/image_tui.min.css"
            ],
            designJavascripts: [
              "https://code.jquery.com/jquery-3.2.1.slim.min.js",
              "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js",
              "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js",
              "https://cdnjs.cloudflare.com/ajax/libs/froala-editor/3.1.1/js/froala_editor.pkgd.min.js",
              "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js",
              "https://cdn.jsdelivr.net/npm/tui-code-snippet@1.4.0/dist/tui-code-snippet.min.js",
              "https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/tui-image-editor.min.js",
              "https://cdn.jsdelivr.net/npm/froala-editor@3.1.1/js/third_party/image_tui.min.js"
            ]
          }
        });
        window.pages.setView(1);
      };
      d.head.appendChild(s2);
    };
    d.head.appendChild(s1);
  }

  render() {
    return <div id="selector-id" style={{ height: "100vh" }}></div>;
  }
}

(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tab1_tab1_module_ts"], {
    /***/
    2168:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageModule": function Tab1PageModule() {
          return (
            /* binding */
            _Tab1PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Tab1PageModule = function _Tab1PageModule() {
        _classCallCheck(this, _Tab1PageModule);
      };

      _Tab1PageModule.??fac = function Tab1PageModule_Factory(t) {
        return new (t || _Tab1PageModule)();
      };

      _Tab1PageModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _Tab1PageModule
      });
      _Tab1PageModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
          path: '',
          component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_Tab1PageModule, {
          declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    46923:
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1Page": function Tab1Page() {
          return (
            /* binding */
            _Tab1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _Tab1Page = /*#__PURE__*/function () {
        function _Tab1Page(router) {
          _classCallCheck(this, _Tab1Page);

          this.router = router;
          this.appPages = [];
        }

        _createClass(_Tab1Page, [{
          key: "addHover",
          value: function addHover(id) {
            document.getElementById(id).classList.toggle('hover');
          }
        }, {
          key: "openBook",
          value: function openBook() {
            this.router.navigate(['tabs/tab2']);
          }
        }, {
          key: "my",
          value: function my() {
            console.log('navigate to my');
            this.router.navigate(['my-page']);
          }
        }, {
          key: "alert",
          value: function (_alert) {
            function alert() {
              return _alert.apply(this, arguments);
            }

            alert.toString = function () {
              return _alert.toString();
            };

            return alert;
          }(function () {
            alert('sdada');
          })
        }]);

        return _Tab1Page;
      }();

      _Tab1Page.??fac = function Tab1Page_Factory(t) {
        return new (t || _Tab1Page)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _Tab1Page.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _Tab1Page,
        selectors: [["app-tab1"]],
        decls: 86,
        vars: 0,
        consts: [["id", "book1", 1, "book", 3, "click"], [1, "hardcover_front"], [1, "coverDesign", "yellow"], [1, "ribbon"], [2, "margin", "40px 0 20px", "font-size", "2em"], [1, "page"], [2, "padding", "30px 10px", "text-align", "center", "margin-bottom", "10px"], [1, "btn", "ion-color-primary", 3, "click"], [1, "hardcover_back"], [1, "book_spine"], ["id", "book2", 1, "book", 3, "click"], [1, "coverDesign", "blue"], [2, "margin-top", "10%", "padding", "30px 10px", "font-size", "1.8em"], [1, "btn", "ion-color-primary"], ["id", "book3", 1, "book", 3, "click"], [1, "coverDesign", "green"], [2, "margin-top", "5px"]],
        template: function Tab1Page_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Tab1Page_Template_div_click_3_listener() {
              return ctx.addHover("book1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Yeni");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\xC7irkin \xD6rd\u0259k Balas\u0131");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "H.X. Andersen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " F\u0259rqli olmaq he\xE7 d\u0259 pis deyil, h\u0259tta b\u0259lk\u0259 \u0259n ali bir g\xF6z\u0259llikdir... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Tab1Page_Template_a_click_19_listener() {
              return ctx.openBook();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Oxu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Tab1Page_Template_div_click_30_listener() {
              return ctx.addHover("book2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Tezlikl\u0259");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h1", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "D\xFCym\u0259cik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "H.X. Andersen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " O bapbalaca lap d\xFCym\u0259 boyda idi. Amma sanki h\u0259yat bunu g\xF6rm\xFCrd\xFC... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Tezlikl\u0259");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Tab1Page_Template_div_click_57_listener() {
              return ctx.addHover("book3");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Tezlikl\u0259");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h1", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Balaca \u015Fahzad\u0259");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "A. S. Ekz\xFCperi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "(8+ ya\u015F)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " B\xFCt\xFCn b\xF6y\xFCkl\u0259r u\u015Faq olublar, amma bunu ham\u0131s\u0131 xat\u0131rlam\u0131r... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Tezlikl\u0259");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow],
        styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n\n\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  content: \"\";\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  color: #34495e;\n  font-family: \"Lato\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  text-decoration: none;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: uppercase;\n  border: 2px solid #16a085;\n  margin-top: 10px;\n  margin-left: 25%;\n  width: 50%;\n  color: #16a085;\n  font-size: 0.9em;\n  font-weight: 700;\n  padding: 0.1em 0.4em;\n  text-align: center;\n  transition: color 0.3s, border-color 0.3s;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  border-color: #16a085;\n  color: #16a085;\n}\n\n\n\n.align[_ngcontent-%COMP%] {\n  clear: both;\n  margin: 90px auto 20px;\n  width: 100%;\n  max-width: 1170px;\n  text-align: center;\n}\n\n.align[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: 500px;\n  min-height: 300px;\n  display: inline-block;\n  margin: 30px 20px 30px 30px;\n  padding: 0 0 0 60px;\n  vertical-align: top;\n}\n\n\n\n\n\n.book[_ngcontent-%COMP%] {\n  margin: 10vh 10% 5vh 10rem;\n  position: relative;\n  width: 11rem;\n  height: 14rem;\n  perspective: 1000px;\n  transform-style: preserve-3d;\n}\n\n\n\n\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  background-color: #eee;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  background: #fffbec;\n}\n\n\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  background: #fffbec;\n}\n\n\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  background: #fffbec;\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  background: #eee;\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  background: #333;\n}\n\n\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before, .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  background: #999;\n}\n\n\n\n.page[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);\n  box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);\n  border-radius: 0px 5px 5px 0px;\n}\n\n\n\n.hardcover_front[_ngcontent-%COMP%] {\n  transform: rotateY(-34deg) translateZ(8px);\n  z-index: 100;\n}\n\n.hardcover_back[_ngcontent-%COMP%] {\n  transform: rotateY(-15deg) translateZ(-8px);\n}\n\n.page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotateY(-28deg);\n}\n\n.page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotateY(-30deg);\n}\n\n.page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotateY(-32deg);\n}\n\n.page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotateY(-34deg);\n}\n\n.page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotateY(-36deg);\n}\n\n\n\n.hardcover_front[_ngcontent-%COMP%], .hardcover_back[_ngcontent-%COMP%], .book_spine[_ngcontent-%COMP%], .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n}\n\n.hardcover_front[_ngcontent-%COMP%], .hardcover_back[_ngcontent-%COMP%] {\n  transform-origin: 0% 100%;\n}\n\n.hardcover_front[_ngcontent-%COMP%] {\n  transition: all 0.8s ease, z-index 0.6s;\n}\n\n\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transform: translateZ(2px);\n}\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  transform: rotateY(180deg) translateZ(2px);\n}\n\n\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  transform: translateZ(2px);\n}\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  transform: translateZ(-2px);\n}\n\n\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before, .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before {\n  width: 4px;\n  height: 100%;\n}\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n}\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before {\n  transform: rotateY(90deg) translateZ(158px) translateX(2px);\n}\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  width: 4px;\n  height: 160px;\n}\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);\n}\n\n.hardcover_front[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  box-shadow: 0px 0px 30px 5px #333;\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);\n}\n\n\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before {\n  width: 4px;\n  height: 100%;\n}\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n}\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before {\n  transform: rotateY(90deg) translateZ(158px) translateX(2px);\n}\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  width: 4px;\n  height: 160px;\n}\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);\n}\n\n.hardcover_back[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  box-shadow: 10px -1px 80px 20px #666;\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);\n}\n\n\n\n.book_spine[_ngcontent-%COMP%] {\n  transform: rotateY(60deg) translateX(-5px) translateZ(-12px);\n  width: 16px;\n  z-index: 0;\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  transform: translateZ(2px);\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  transform: translateZ(-2px);\n}\n\n\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before {\n  width: 4px;\n  height: 100%;\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  transform: rotateY(90deg) translateZ(-2px) translateX(2px);\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:before {\n  transform: rotateY(-90deg) translateZ(-12px);\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after, .book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  width: 4px;\n  height: 16px;\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);\n}\n\n.book_spine[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);\n  transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);\n}\n\n.page[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-style: preserve-3d;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 98%;\n  top: 1%;\n  left: 3%;\n  z-index: 10;\n}\n\n.page[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform-origin: left center;\n  transition-property: transform;\n  transition-timing-function: ease;\n}\n\n.page[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1) {\n  transition-duration: 0.6s;\n}\n\n.page[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2) {\n  transition-duration: 0.6s;\n}\n\n.page[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3) {\n  transition-duration: 0.4s;\n}\n\n.page[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4) {\n  transition-duration: 0.5s;\n}\n\n.page[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5) {\n  transition-duration: 0.6s;\n}\n\n\n\n.book.hover[_ngcontent-%COMP%]    > .hardcover_front[_ngcontent-%COMP%] {\n  transform: rotateY(-145deg) translateZ(0);\n  z-index: 0;\n}\n\n.book.hover[_ngcontent-%COMP%]    > .page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotateY(-30deg);\n  transition-duration: 1.5s;\n}\n\n.book.hover[_ngcontent-%COMP%]    > .page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotateY(-35deg);\n  transition-duration: 1.8s;\n}\n\n.book.hover[_ngcontent-%COMP%]    > .page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotateY(-118deg);\n  transition-duration: 1.6s;\n}\n\n.book.hover[_ngcontent-%COMP%]    > .page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotateY(-130deg);\n  transition-duration: 1.4s;\n}\n\n.book.hover[_ngcontent-%COMP%]    > .page[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotateY(-140deg);\n  transition-duration: 1.2s;\n}\n\n\n\n\n\n.coverDesign[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.coverDesign[_ngcontent-%COMP%]::after {\n  background-image: linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.coverDesign[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2.2em;\n  letter-spacing: 0.05em;\n  text-align: center;\n  margin: 54% 0 0 0;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);\n}\n\n.coverDesign[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #f8f8f8;\n  font-size: 1em;\n  text-align: center;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.1);\n}\n\n.yellow[_ngcontent-%COMP%] {\n  background-color: #f1c40f;\n  background-image: linear-gradient(top, #f1c40f 58%, #e7ba07 0%);\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: #F10F0FFF;\n  background-image: linear-gradient(top, #F10F0FFF 58%, #E70000FF 0%);\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: #439143FF;\n  background-image: linear-gradient(top, #439143FF 58%, #00E700FF 0%);\n}\n\n.blue[_ngcontent-%COMP%] {\n  background-color: #3498db;\n  background-image: linear-gradient(top, #3498db 58%, #2a90d4 0%);\n}\n\n.grey[_ngcontent-%COMP%] {\n  background-color: #f8e9d1;\n  background-image: linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);\n}\n\n\n\n.ribbon[_ngcontent-%COMP%] {\n  background: #c0392b;\n  color: #fff;\n  display: block;\n  font-size: 0.5em;\n  position: absolute;\n  top: 11px;\n  right: 1px;\n  width: 40px;\n  height: 20px;\n  line-height: 20px;\n  letter-spacing: 0.15em;\n  text-align: center;\n  transform: rotateZ(45deg) translateZ(1px);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 10;\n}\n\n.ribbon[_ngcontent-%COMP%]::before, .ribbon[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: -20px;\n  width: 0;\n  height: 0;\n  border-bottom: 20px solid #c0392b;\n  border-top: 20px solid transparent;\n}\n\n.ribbon[_ngcontent-%COMP%]::before {\n  left: -20px;\n  border-left: 20px solid transparent;\n}\n\n.ribbon[_ngcontent-%COMP%]::after {\n  right: -20px;\n  border-right: 20px solid transparent;\n}\n\n\n\nfigcaption[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  text-align: left;\n  position: absolute;\n  top: 0%;\n  left: 160px;\n  width: 310px;\n  -webkit-backface-visibility: hidden;\n}\n\nfigcaption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfigcaption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #16a085;\n  padding: 0.6em 0 1em 0;\n  display: block;\n}\n\nfigcaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #63707d;\n  line-height: 1.3;\n}\n\n\n\n@media screen and (max-width: 37.8125em) {\n  .align[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 440px;\n    height: auto;\n    padding: 0;\n    margin: 0 0 30px 0;\n  }\n\n  figcaption[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 320px;\n    top: 250px;\n    padding-left: 0;\n    left: -80px;\n    font-size: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQWJGOztFQWdCQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFiRjtBQUNGIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuXG4vKlxuXHRBLiBNaW5pIFJlc2V0XG4qL1xuKiwgKjphZnRlciwgKjpiZWZvcmUgeyAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICBjb2xvcjogIzM0NDk1ZTtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogIzJjM2U1MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTZhMDg1O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogIzE2YTA4NTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC4xZW0gMC40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XG59XG5cbi5idG46aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMxNmEwODU7XG4gIGNvbG9yOiAjMTZhMDg1O1xufVxuXG4vKiBiYXNpYyBncmlkLCBvbmx5IGZvciB0aGlzIGRlbW8gKi9cblxuLmFsaWduIHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogOTBweCBhdXRvIDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxpZ24gPiBsaSB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzMHB4IDIwcHggMzBweCAzMHB4O1xuICBwYWRkaW5nOiAwIDAgMCA2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuSEFSRENPVkVSXG5UYWJsZSBvZiBDb250ZW50c1xuXG4xLiBjb250YWluZXJcbjIuIGJhY2tncm91bmQgJiBjb2xvclxuMy4gb3BlbmluZyBjb3ZlciwgYmFjayBjb3ZlciBhbmQgcGFnZXNcbjQuIHBvc2l0aW9uLCB0cmFuc2Zvcm0geSB0cmFuc2l0aW9uXG41LiBldmVudHNcbjYuIEJvbnVzXG5cdC0gQ292ZXIgZGVzaWduXG5cdC0gUmliYm9uXG5cdC0gRmlnY2FwdGlvblxuNy4gbWluaS1yZXNldFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXG5cbi8qXG5cdDEuIGNvbnRhaW5lclxuKi9cblxuLmJvb2sge1xuICBtYXJnaW46IDEwdmggMTAlIDV2aCAxMHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTFyZW07XG4gIGhlaWdodDogMTRyZW07XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLypcblx0Mi4gYmFja2dyb3VuZCAmIGNvbG9yXG4qL1xuXG4vKiBIQVJEQ09WRVIgRlJPTlQgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogcmV2ZXJzZSAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmJlYztcbn1cblxuLyogSEFSRENPVkVSIEJBQ0sgKi9cbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZiZWM7XG59XG5cbi8qIHJldmVyc2UgKi9cbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmJlYztcbn1cblxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi8qIHRoaWNrbmVzcyBvZiBjb3ZlciAqL1xuXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDpiZWZvcmUsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YmVmb3JlLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmFmdGVyLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YmVmb3JlLFxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDpiZWZvcmUsXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmFmdGVyLFxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xufVxuXG4vKiBwYWdlICovXG5cbi5wYWdlID4gbGkge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTFkZGQ4IDAlLCAjZmZmYmY2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTFkZGQ4IDAlLCAjZmZmYmY2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNlMWRkZDggMCUsICNmZmZiZjYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTFkZGQ4IDAlLCAjZmZmYmY2IDEwMCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjEpLCBpbnNldCAtMXB4IDBweCAxcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG59XG5cbi8qXG5cdDMuIG9wZW5pbmcgY292ZXIsIGJhY2sgY292ZXIgYW5kIHBhZ2VzXG4qL1xuXG4uaGFyZGNvdmVyX2Zyb250IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZykgdHJhbnNsYXRlWig4cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM0ZGVnKSB0cmFuc2xhdGVaKDhweCk7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmhhcmRjb3Zlcl9iYWNrIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKSB0cmFuc2xhdGVaKC04cHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpIHRyYW5zbGF0ZVooLThweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpIHRyYW5zbGF0ZVooLThweCk7XG59XG5cbi5wYWdlIGxpOm50aC1jaGlsZCgxKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0yOGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0yOGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMjhkZWcpO1xufVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcbn1cblxuLnBhZ2UgbGk6bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTMyZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTMyZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zMmRlZyk7XG59XG5cbi5wYWdlIGxpOm50aC1jaGlsZCg0KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0zNGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xufVxuXG4ucGFnZSBsaTpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzZkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzZkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM2ZGVnKTtcbn1cblxuLypcblx0NC4gcG9zaXRpb24sIHRyYW5zZm9ybSAmIHRyYW5zaXRpb25cbiovXG5cbi5oYXJkY292ZXJfZnJvbnQsXG4uaGFyZGNvdmVyX2JhY2ssXG4uYm9va19zcGluZSxcbi5oYXJkY292ZXJfZnJvbnQgbGksXG4uaGFyZGNvdmVyX2JhY2sgbGksXG4uYm9va19zcGluZSBsaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmhhcmRjb3Zlcl9mcm9udCxcbi5oYXJkY292ZXJfYmFjayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xufVxuXG4uaGFyZGNvdmVyX2Zyb250IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLCB6LWluZGV4IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZSwgei1pbmRleCAwLjZzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLCB6LWluZGV4IDAuNnM7XG59XG5cbi8qIEhBUkRDT1ZFUiBmcm9udCAqL1xuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xufVxuXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooMnB4KTtcbn1cblxuLyogSEFSRENPVkVSIGJhY2sgKi9cbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xufVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xufVxuXG4vKiB0aGlja25lc3Mgb2YgY292ZXIgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfZnJvbnQgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlLFxuLmhhcmRjb3Zlcl9iYWNrIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDpiZWZvcmUsXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSxcbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4vKiBIQVJEQ09WRVIgZnJvbnQgKi9cbi5oYXJkY292ZXJfZnJvbnQgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhhcmRjb3Zlcl9mcm9udCBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xufVxuXG4uaGFyZGNvdmVyX2Zyb250IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xufVxuXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLmhhcmRjb3Zlcl9mcm9udCBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDgwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG59XG4uaGFyZGNvdmVyX2Zyb250IGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDVweCAjMzMzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMTQwcHgpIHRyYW5zbGF0ZVgoLTJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgtMnB4KSB0cmFuc2xhdGVZKC03OHB4KTtcbn1cblxuLyogdGhpY2tuZXNzIG9mIGNvdmVyICovXG5cbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oYXJkY292ZXJfYmFjayBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooLTJweCkgdHJhbnNsYXRlWCgycHgpO1xufVxuLmhhcmRjb3Zlcl9iYWNrIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDE1OHB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigxNThweCkgdHJhbnNsYXRlWCgycHgpO1xufVxuXG4uaGFyZGNvdmVyX2JhY2sgbGk6bGFzdC1jaGlsZDphZnRlcixcbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTYwcHg7XG59XG5cbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooODBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG59XG5cbi5oYXJkY292ZXJfYmFjayBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDEwcHggLTFweCA4MHB4IDIwcHggIzY2NjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKC0xNDBweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTc4cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTE0MHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNzhweCk7XG59XG5cbi8qIEJPT0sgU1BJTkUgKi9cbi5ib29rX3NwaW5lIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoNjBkZWcpIHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWigtMTJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDYwZGVnKSB0cmFuc2xhdGVYKC01cHgpIHRyYW5zbGF0ZVooLTEycHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoNjBkZWcpIHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWigtMTJweCk7XG4gIHdpZHRoOiAxNnB4O1xuICB6LWluZGV4OiAwO1xufVxuXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigycHgpO1xufVxuXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0ycHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTJweCk7XG59XG5cbi8qIHRoaWNrbmVzcyBvZiBib29rIHNwaW5lICovXG4uYm9va19zcGluZSBsaTpmaXJzdC1jaGlsZDphZnRlcixcbi5ib29rX3NwaW5lIGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigtMnB4KSB0cmFuc2xhdGVYKDJweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKC0ycHgpIHRyYW5zbGF0ZVgoMnB4KTtcbn1cblxuLmJvb2tfc3BpbmUgbGk6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMnB4KTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigtMTJweCk7XG59XG5cbi5ib29rX3NwaW5lIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIsXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmJvb2tfc3BpbmUgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDkwZGVnKSB0cmFuc2xhdGVaKDhweCkgdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTZweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWig4cHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpO1xufVxuXG4uYm9va19zcGluZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDVweCAtMXB4IDEwMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMjEwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWig5MGRlZykgdHJhbnNsYXRlWigtMjEwcHgpIHRyYW5zbGF0ZVgoMnB4KSB0cmFuc2xhdGVZKC02cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooOTBkZWcpIHRyYW5zbGF0ZVooLTIxMHB4KSB0cmFuc2xhdGVYKDJweCkgdHJhbnNsYXRlWSgtNnB4KTtcbn1cblxuLnBhZ2UsXG4ucGFnZSA+IGxpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk4JTtcbiAgdG9wOiAxJTtcbiAgbGVmdDogMyU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ucGFnZSA+IGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbn1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoMSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbn1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbn1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoMykge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxuLnBhZ2UgPiBsaTpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cztcbn1cblxuLypcblx0NS4gZXZlbnRzXG4qL1xuXG4uYm9vay5ob3ZlciA+IC5oYXJkY292ZXJfZnJvbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTQ1ZGVnKSB0cmFuc2xhdGVaKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTQ1ZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE0NWRlZykgdHJhbnNsYXRlWigwKTtcbiAgei1pbmRleDogMDtcbn1cblxuLmJvb2suaG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoMSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG59XG5cbi5ib29rLmhvdmVyID4gLnBhZ2UgbGk6bnRoLWNoaWxkKDIpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0zNWRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44cztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xufVxuXG4uYm9vay5ob3ZlciA+IC5wYWdlIGxpOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xMThkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTE4ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xMThkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNnM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS42cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS42cztcbn1cblxuLmJvb2suaG92ZXIgPiAucGFnZSBsaTpudGgtY2hpbGQoNCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTMwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTEzMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTMwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjRzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XG59XG5cbi5ib29rLmhvdmVyID4gLnBhZ2UgbGk6bnRoLWNoaWxkKDUpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE0MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xNDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE0MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xufVxuXG4vKlxuXHQ2LiBCb251c1xuKi9cblxuLyogY292ZXIgQ1NTICovXG5cbi5jb3ZlckRlc2lnbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvdmVyRGVzaWduOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCAtMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoIC0xMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIC0xMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmNvdmVyRGVzaWduIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMi4yZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1NCUgMCAwIDA7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5jb3ZlckRlc2lnbiBwIHtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjFjNDBmIDU4JSwgI2U3YmEwNyAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmMWM0MGYgNTglLCAjZTdiYTA3IDAlKTtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMTBGMEZGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjRjEwRjBGRkYgNTglLCAjRTcwMDAwRkYgMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNGMTBGMEZGRiA1OCUsICNFNzAwMDBGRiAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNGMTBGMEZGRiA1OCUsICNFNzAwMDBGRiAwJSk7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzkxNDNGRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNDM5MTQzRkYgNTglLCAjMDBFNzAwRkYgMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM0MzkxNDNGRiA1OCUsICMwMEU3MDBGRiAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICM0MzkxNDNGRiA1OCUsICMwMEU3MDBGRiAwJSk7XG59XG5cblxuLmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIgNTglLCAjMmE5MGQ0IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMzQ5OGRiIDU4JSwgIzJhOTBkNCAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIgNTglLCAjMmE5MGQ0IDAlKTtcbn1cblxuLmdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlOWQxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmOGU5ZDEgNTglLCAjZTdkNWI3IDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhlOWQxIDU4JSwgI2U3ZDViNyAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmOGU5ZDEgNTglLCAjZTdkNWI3IDAlKTtcbn1cblxuLyogQmFzaWMgcmliYm9uICovXG5cbi5yaWJib24ge1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICByaWdodDogMXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig0NWRlZykgdHJhbnNsYXRlWigxcHgpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWig0NWRlZykgdHJhbnNsYXRlWigxcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpIHRyYW5zbGF0ZVooMXB4KTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ucmliYm9uOjpiZWZvcmUsXG4ucmliYm9uOjphZnRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICNjMDM5MmI7XG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yaWJib246OmJlZm9yZXtcbiAgbGVmdDogLTIwcHg7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmliYm9uOjphZnRlcntcbiAgcmlnaHQ6IC0yMHB4O1xuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi8qIGZpZ2NhcHRpb24gKi9cblxuZmlnY2FwdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAxNjBweDtcbiAgd2lkdGg6IDMxMHB4O1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuZmlnY2FwdGlvbiBoMSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmlnY2FwdGlvbiBzcGFuIHtcbiAgY29sb3I6ICMxNmEwODU7XG4gIHBhZGRpbmc6IDAuNmVtIDAgMWVtIDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5maWdjYXB0aW9uIHAge1xuICBjb2xvcjogIzYzNzA3ZDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLyogTWVkaWEgUXVlcmllcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuODEyNWVtKSB7XG4gIC5hbGlnbiA+IGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0NDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gIH1cblxuICBmaWdjYXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIHRvcDogMjUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGxlZnQ6IC04MHB4O1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG59XG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es5.js.map
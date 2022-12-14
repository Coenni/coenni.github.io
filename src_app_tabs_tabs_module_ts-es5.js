(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tabs_tabs_module_ts"], {
    /***/
    80530:
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageRoutingModule": function TabsPageRoutingModule() {
          return (
            /* binding */
            _TabsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs.page */
      7942);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [{
          path: 'tab1',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() */
              [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
              /*! ../tab1/tab1.module */
              2168)).then(function (m) {
                return m.Tab1PageModule;
              });
            }
          }]
        }, {
          path: 'tab2',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() */
              [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
              /*! ../tab2/tab2.module */
              14608)).then(function (m) {
                return m.Tab2PageModule;
              });
            }
          }]
        }, {
          path: 'tab3',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() */
              [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
              /*! ../tab3/tab3.module */
              53746)).then(function (m) {
                return m.Tab3PageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var _TabsPageRoutingModule = function _TabsPageRoutingModule() {
        _classCallCheck(this, _TabsPageRoutingModule);
      };

      _TabsPageRoutingModule.??fac = function TabsPageRoutingModule_Factory(t) {
        return new (t || _TabsPageRoutingModule)();
      };

      _TabsPageRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _TabsPageRoutingModule
      });
      _TabsPageRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_TabsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    15564:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageModule": function TabsPageModule() {
          return (
            /* binding */
            _TabsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-routing.module */
      80530);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page */
      7942);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TabsPageModule = function _TabsPageModule() {
        _classCallCheck(this, _TabsPageModule);
      };

      _TabsPageModule.??fac = function TabsPageModule_Factory(t) {
        return new (t || _TabsPageModule)();
      };

      _TabsPageModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _TabsPageModule
      });
      _TabsPageModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_TabsPageModule, {
          declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    7942:
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPage": function TabsPage() {
          return (
            /* binding */
            _TabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _TabsPage = function _TabsPage() {
        _classCallCheck(this, _TabsPage);
      };

      _TabsPage.??fac = function TabsPage_Factory(t) {
        return new (t || _TabsPage)();
      };

      _TabsPage.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _TabsPage,
        selectors: [["app-tabs"]],
        decls: 1,
        vars: 0,
        template: function TabsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "ion-tabs");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es5.js.map
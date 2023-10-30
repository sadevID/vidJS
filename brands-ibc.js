/**
 * videojs-sadev
 * @version 1.0
 * @copyright 2022 SA DevLabs
 * @license MIT
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.videojsBrand=e()}}(function(){return function e(t,n,i){function o(d,a){if(!n[d]){if(!t[d]){var f="function"==typeof require&&require;if(!a&&f)return f(d,!0);if(r)return r(d,!0);var l=new Error("Cannot find module '"+d+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[d]={exports:{}};t[d][0].call(u.exports,function(e){var n=t[d][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[d].exports}for(var r="function"==typeof require&&require,d=0;d<i.length;d++)o(i[d]);return o}({1:[function(e,t,n){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o="undefined"!=typeof window?window.videojs:"undefined"!=typeof e?e.videojs:null,r=i(o),d={image:"/logo-example.png",title:"Logo Title",destination:"http://www.google.com",destinationTarget:"_blank"},a=function(e,t){var n=document.createElement("div");n.className="vjs-brand-container";var i=document.createElement("a");i.className="vjs-brand-container-link",i.setAttribute("href",t.destination||d.destination),i.setAttribute("title",t.title||d.title),i.setAttribute("target",t.destinationTarget||d.destinationTarget);var o=document.createElement("img");o.src=t.image||d.image,i.appendChild(o),n.appendChild(i),e.controlBar.el().insertBefore(n,e.controlBar.fullscreenToggle.el()),e.addClass("vjs-brand")},f=function(e){var t=this;this.ready(function(){a(t,r.default.mergeOptions(d,e))})};r.default.plugin("brand",f),f.VERSION="0.0.4",n.default=f,t.exports=n.default}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
var player = videojs('sa-dev');
  player.brand({
  	image: "https://blogger.googleusercontent.com/img/a/AVvXsEgF-IBaEzWoHJQl3Jzqv60VJQJI1ZNtO6N4B_2n_1Gsh6awZSsA48M8bWr8hUtIauPeO6TJDKD1lBJyBrBWWh9rid-9o-AKXofLG53K0r3NgLJybOO7E4_-GEfJPuzzIMeMIukHn-riMMtWPK5r7CIUHEa5Iz8dJ3KfcIC5JaMOt_dWWkFCwUQzo_G0P7E=s25",
    title: "Internet Broadcasting Center",
    destination: "https://www.ibc.biz.id",
    destinationTarget: "_bottom"
  });

"use strict";

var plusIcon = document.querySelectorAll('#plus');
var userIcon = document.querySelectorAll('#user');
var itemOne = document.querySelector('#item1');
var itemTwo = document.querySelector('#item2');
var searchInput = document.querySelector('#nav-search');
var navItems = document.querySelectorAll('.nav-items a');
var bars = document.querySelector('#bars'); // make dropdown hidden

itemOne.hidden = true;
itemTwo.hidden = true;

function showDropdown1() {
  itemOne.hidden = !itemOne.hidden; // ensure both dropdown cannot be active at once

  itemTwo.hidden = true;
}

function showDropdown2() {
  itemTwo.hidden = !itemTwo.hidden; // ensure both dropdown cannot be active at once

  itemOne.hidden = true;
}

function clearBothDropdown(e) {
  if (e.srcElement !== itemOne || e.srcElement !== itemTwo) {
    if (itemOne.hidden === false && itemTwo.hidden === false) {
      itemOne.hidden = true;
      itemTwo.hidden = true;
    }
  }
}

var width = searchInput.style.width = '300px';

function contract(e) {
  if (e.srcElement !== searchInput) {
    searchInput.style.width = '300px';
    searchInput.style.background = 'transparent';
    searchInput.style.color = 'white';
  }

  clearBothDropdown(e);
} // increasing the width of the search imput when clicked 


function expandInput() {
  searchInput.style.width = '550px';
  searchInput.style.background = 'white';
  searchInput.style.color = ' rgb(56, 56, 56)';
  searchInput.style.outline = 'none';
}

function addClass() {
  searchInput.classList.add('toggle');
}

plusIcon.forEach(myFunction);

function myFunction(i) {
  i.addEventListener('click', showDropdown1);
}

userIcon.forEach(myFunction2);

function myFunction2(i) {
  i.addEventListener('click', showDropdown2);
}

searchInput.addEventListener('click', expandInput);
window.addEventListener('click', contract);
bars.addEventListener('click', function () {
  navItems.forEach(function (i) {
    i.classList.add("toggle");
  });
});
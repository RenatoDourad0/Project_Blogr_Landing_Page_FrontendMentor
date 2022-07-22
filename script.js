const $nav = document.getElementById('menu');
const $menuBtn = document.getElementById('menu-btn');
const $product = document.getElementById('product');
const $productBtn = document.getElementById('product-btn');
const $company = document.getElementById('company');
const $companyBtn = document.getElementById('company-btn');
const $connect = document.getElementById('connect');
const $connectBtn = document.getElementById('connect-btn');

$menuBtn.addEventListener('click', () => {
  if ($nav.style.display !== 'flex') {
    $nav.style.display = 'flex';
    $menuBtn.src = './images/icon-close.svg'
  } else {
    $nav.style.display = 'none';
    $menuBtn.src = './images/icon-hamburger.svg'
  }
});

$productBtn.addEventListener('click', () => {
  if ($product.style.display !== 'flex') {
    $product.style.display = 'flex'
  } else {
    $product.style.display = 'none'
  }
});
$companyBtn.addEventListener('click', () => {
  if ($company.style.display !== 'flex') {
    $company.style.display = 'flex'
  } else {
    $company.style.display = 'none'
  }
});
$connectBtn.addEventListener('click', () => {
  if ($connect.style.display !== 'flex') {
    $connect.style.display = 'flex'
  } else {
    $connect.style.display = 'none'
  }
});
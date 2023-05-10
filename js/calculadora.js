onload = () => {
    document.querySelector('#bt-0').onclick = () => digito(0);
    document.querySelector('#bt-1').onclick = () => digito(1);
    document.querySelector('#bt-2').onclick = () => digito(2);
    document.querySelector('#bt-3').onclick = () => digito(3);
    document.querySelector('#bt-4').onclick = () => digito(4);
    document.querySelector('#bt-5').onclick = () => digito(5);
    document.querySelector('#bt-6').onclick = () => digito(6);
    document.querySelector('#bt-7').onclick = () => digito(7);
    document.querySelector('#bt-8').onclick = () => digito(8);
    document.querySelector('#bt-9').onclick = () => digito(9);
    document.querySelector('#bt-som').onclick = () => operador('+');
    document.querySelector('#bt-sub').onclick = () => operador('-');
    document.querySelector('#bt-mult').onclick = () => operador('*');
    document.querySelector('#bt-div').onclick = () => operador('/');
    document.querySelector('#bt-vir').onclick = virgula;
    document.querySelector('#bt-dell').onclick = limpa;
    document.querySelector('#bt-ig').onclick = calcula;
}
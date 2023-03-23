// Add Event on submit in form
document.forms["calculatorForm"].onsubmit = function(event){
  // No reload after submit
  event.preventDefault();

  // declar variable
  const usia = document.getElementById("usia").value;
  const jenisKelamin = document.getElementById("gender").value;
  const berat = document.getElementById("berat").value;
  const tinggi = document.getElementById("tinggi").value/100;

  // call fucntion
  doHitungBMI(usia,berat,tinggi);

// auto reset after submit
  document.forms["calculatorForm"].reset();
}

// make function
function doHitungBMI(usia, berat, tinggi){
  // handle try catch
  try {
    // get result for BMI
    let result = berat / (tinggi*tinggi);

    // declar variable result DOM
    const mainTitle = document.getElementById("mainTitle");
    const mainSubtitle = document.getElementById("mainSubtitle");
    const mainNilai = document.getElementById("mainNilai");
    const detailHasil = document.getElementById("detailHasil");
    const detailKategori = document.getElementById("detailKategori");

    // changes format number on float
    mainNilai.innerHTML = result.toFixed(1);  

    // declar regular expression
    const regExp = /[0-9]$/;

    // decision regExp to check validation form
    if(!regExp.test(usia)) return alert("Hanya boleh bilangan bulat 0-9");
    if(!regExp.test(berat)) return alert("Hanya boleh bilangan bulat 0-9");
    if(!regExp.test(tinggi)) return alert("Hanya boleh bilangan bulat 0-9");

    // check result 
    if(result.toFixed(2) < 18.5){
      mainTitle.innerText = "Kekurangan berat badan";
      mainSubtitle.innerText = "Anda kekurangan berat badan";
      detailHasil.innerHTML = "<strong>Kurang dari 18.5</strong>";
      detailKategori.innerText = "Berat badan kurang";
    }else if(result < 25){
      mainTitle.innerText = "Normal (ideal)";
      mainSubtitle.innerText = "Anda memiliki badan ideal";
      detailHasil.innerHTML = "<strong>18.5 dan 24.9</strong>";
      detailKategori.innerText = "Badan ideal";
    }else if(result < 30){  
      mainTitle.innerText = "Kelebihan berat badan";
      mainSubtitle.innerText = "Anda memiliki berat badan berlebih";
      detailHasil.innerHTML = "<strong>25.0 dan 29.0</strong>";
      detailKategori.innerText = "Berat badan berlebih";
    }else{
      mainTitle.innerText = "Kegemukan (Obesitas)";
      mainSubtitle.innerText = "Anda terkena obesitas";
      detailHasil.innerText = "30.0 atau lebih";
      detailKategori.innerText = "Kegemukan (Obesitas)";
    }

    // display result on screen
    const displayResult = document.getElementById("calculatorResult");
    displayResult.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

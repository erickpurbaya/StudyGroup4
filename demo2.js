var biodata = {
    namaAwal : "Athariq",
    namaAkhir : "Purbaya",
    alamat : "Bandung",
    umur : 20,
    namaLengkap : function (){
        console.log(this.namaAwal + " " + this.namaAkhir)
    }
};

biodata.alamat;
biodata.namaLengkap();
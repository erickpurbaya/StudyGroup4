function kerjakanTugas(pelajaran,callback){
    console.log(`Ngerjain tugas ${pelajaran}`);
    callback();
}

kerjakanTugas('Matematika', function(){
    console.log('Ok, selesai juga ni tugas');
});
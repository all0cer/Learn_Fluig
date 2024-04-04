
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("login");
    dataset.addColumn("nome");
    // filtra dataset: 1- Nome da coluna 2- inicio 3-fim 4- ordenação
    var filtroGroup =  DatasetFactory.createConstraint("colleagueGroupPK.groupId", "reponsaveis", "reponsaveis", ConstraintType.MUST);
    // busca dataset: 1- Nome do dataset 2- colunas buscar 3-filtros 4- ordenação
    var datasetGroup = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGroup), null);

    

    for(i = 0; i < datasetGroup.rowsCount;i++){
        var colabGroup = datasetGroup.getValue(i, "colleagueGroupPK.colleagueId");

        var datasetColaborador = DatasetFactory.getDataset("colleague", null, null, null);

        for(j=0; j < datasetColaborador.rowsCount; j++){
            var colabLogin = datasetColaborador.getValue(j, "colleaguePK.colleagueId");
            var colabNome = datasetColaborador.getValue(j, "colleagueName");
            if(colabGroup == colabLogin){
                dataset.addRow(new Array(colabLogin, colabNome));
            }
        }



    }
    return dataset;

}


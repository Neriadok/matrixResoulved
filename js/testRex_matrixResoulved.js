/**
 * Tests for matrixResoulved.js
 * 
 * @see matrixResoulved.js
 * @author Neriadok-DanielMartínDíaz
 * @version 1.0 - 04/06/2015
 */





/******* COMPROBACIONES *******/


/**
 * VERIFICAR MATRIZ
 * Test unitario para matrixResoulved_esMatriz(variable).
 * Unitary test for matrixResoulved_esMatriz(variable).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_esMatriz(variable)
 */
function testRex_matrixResoulved_esMatriz(){
	
	var correcto = true;
	var variable;
	
	variable = 1;
	if(matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 1");
	}
	
	variable = 12;
	if(matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 2");
	}
	
	variable = '1';
	if(!matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 3");
	}
	
	variable = [2,2,3];
	if(matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 4");
	}
	
	variable = [[1],1,[0,1]];
	if(matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 5");
	}
	
	variable = [[1],[0],3];
	if(matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 6");
	}
	
	variable = [1];
	if(matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 7");
	}
	
	variable = [[1,0],[0,1]];
	if(!matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 8");
	}
	
	variable = [['a',0],[0,1]];
	if(!matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 9");
	}
	
	variable = 'a';
	if(!matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 10");
	}
	
	variable = [["asdf",0],[0,1]];
	if(!matrixResoulved_esMatriz(variable)){
		correcto = false;
		console.log("Falla test 11");
	}
	
	return correcto;
};



/**
 * VERIFICAR MATRIZ NULA
 * Test unitario para matrixResoulved_esNula(matriz).
 * Unitary test for matrixResoulved_esNula(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_esNula(matriz)
 */
function testRex_matrixResoulved_esNula(){
	
	var correcto = true;
	var variable;

	variable = [[0],[0],[1]];
	if(matrixResoulved_esNula(variable)){
		correcto = false;
		console.log("Falla test 1");
	}
	
	variable = [[1,0],[1],[1]];
	if(matrixResoulved_esNula(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}
	
	variable = [[0,00],[0,0],[0,1]];
	if(matrixResoulved_esNula(variable)){
		correcto = false;
		console.log("Falla test 3");
	}
	
	variable = [[0],[00],[0]];
	if(!matrixResoulved_esNula(variable)){
		correcto = false;
		console.log("Falla test 4");
	}
	
	variable = [[0,0],[0,0],[00,0]];
	if(!matrixResoulved_esNula(variable)){
		correcto = false;
		console.log("Falla test 5");
	}
	
	variable = [[0,00],[0,0],[0,(1-1)]];
	if(!matrixResoulved_esNula(variable)){
		correcto = false;
		console.log("Falla test 6");
	}
	
	return correcto;
};



/**
 * VERIFICAR MATRIZ CUADRADA
 * Test unitario para matrixResoulved_esCuadrada(matriz).
 * Unitary test for matrixResoulved_esCuadrada(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_esCuadrada(matriz)
 */
function testRex_matrixResoulved_esCuadrada(){
	
	var correcto = true;
	var variable;

	variable = [[0],[2],[1]];
	if(matrixResoulved_esCuadrada(variable)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable = [[0,3,2],[2],[2,1]];
	if(matrixResoulved_esCuadrada(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable = [[0,0,2],[2,1,2],[1,2,2]];
	if(!matrixResoulved_esCuadrada(variable)){
		correcto = false;
		console.log("Falla test 3");
	}

	return correcto;
};



/**
 * VERIFICAR MATRIZ DIAGONAL
 * Test unitario para matrixResoulved_esDiagonal(matriz).
 * Unitary test for matrixResoulved_esDiagonal(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_esDiagonal(matriz)
 */
function testRex_matrixResoulved_esDiagonal(){
	
	var correcto = true;
	var variable;

	variable = [[0],[2],[1]];
	if(matrixResoulved_esDiagonal(variable)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable = [[0,3,2],[2],[2,1]];
	if(matrixResoulved_esDiagonal(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable = [[0,0,2],[2,1,2],[1,2,2]];
	if(matrixResoulved_esDiagonal(variable)){
		correcto = false;
		console.log("Falla test 3");
	}

	variable = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
	if(!matrixResoulved_esDiagonal(variable)){
		correcto = false;
		console.log("Falla test 4");
	}

	return correcto;
};



/**
 * VERIFICAR MATRIZ UNIDAD
 * Test unitario para matrixResoulved_esUnidad(matriz).
 * Unitary test for matrixResoulved_esUnidad(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_esUnidad(matriz)
 */
function testRex_matrixResoulved_esUnidad(){
	
	var correcto = true;
	var variable;

	variable = [[0],[2],[1]];
	if(matrixResoulved_esUnidad(variable)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable = [[0,3,2],[2],[2,1]];
	if(matrixResoulved_esUnidad(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable = [[1,0,0],[0,1,0],[0,0,3]];
	if(matrixResoulved_esUnidad(variable)){
		correcto = false;
		console.log("Falla test 3");
	}

	variable = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
	if(!matrixResoulved_esUnidad(variable)){
		correcto = false;
		console.log("Falla test 4");
	}

	return correcto;
};



/**
 * VERIFICAR MATRIZ TRIANGULAR SUPERIOR
 * Test unitario para matrixResoulved_esTriangularSuperior(matriz).
 * Unitary test for matrixResoulved_esTriangularSuperior(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_esTriangularSuperior(matriz)
 */
function testRex_matrixResoulved_esTriangularSuperior(){
	
	var correcto = true;
	var variable;

	variable = [[0],[2],[1]];
	if(matrixResoulved_esTriangularSuperior(variable)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable = [[0,3,2],[2],[2,1]];
	if(matrixResoulved_esTriangularSuperior(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable = [[1,2,1],[0,1,0],[0,0,3]];
	if(!matrixResoulved_esTriangularSuperior(variable)){
		correcto = false;
		console.log("Falla test 3");
	}

	variable = [[1,3,4,4],[0,1,2,0],[0,0,1,3],[0,0,0,1]];
	if(!matrixResoulved_esTriangularSuperior(variable)){
		correcto = false;
		console.log("Falla test 4");
	}

	variable = [[1,0,0,0],[2,1,0,0],[2,1,1,0],[1,3,3,1]];
	if(matrixResoulved_esTriangularSuperior(variable)){
		correcto = false;
		console.log("Falla test 5");
	}

	return correcto;
};



/**
 * VERIFICAR MATRIZ TRIANGULAR INFERIOR
 * Test unitario para matrixResoulved_esTriangularInferior(matriz).
 * Unitary test for matrixResoulved_esTriangularInferior(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_esTriangularInferior(matriz)
 */
function testRex_matrixResoulved_esTriangularInferior(){
	
	var correcto = true;
	var variable;

	variable = [[0],[2],[1]];
	if(matrixResoulved_esTriangularInferior(variable)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable = [[0,3,2],[2],[2,1]];
	if(matrixResoulved_esTriangularInferior(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable = [[1,2,1],[0,1,0],[0,0,3]];
	if(matrixResoulved_esTriangularInferior(variable)){
		correcto = false;
		console.log("Falla test 3");
	}

	variable = [[1,3,4,4],[0,1,2,0],[0,0,1,3],[0,0,0,1]];
	if(matrixResoulved_esTriangularInferior(variable)){
		correcto = false;
		console.log("Falla test 4");
	}

	variable = [[1,0,0,0],[2,1,0,0],[2,1,1,0],[1,3,3,1]];
	if(!matrixResoulved_esTriangularInferior(variable)){
		correcto = false;
		console.log("Falla test 5");
	}

	return correcto;
};



/**
 * VERIFICAR MATRIZ TRIANGULAR INFERIOR
 * Test unitario para matrixResoulved_esTriangular(matriz).
 * Unitary test for matrixResoulved_esTriangular(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_esTriangular(matriz)
 */
function testRex_matrixResoulved_esTriangular(){
	
	var correcto = true;
	var variable;

	variable = [[0],[2],[1]];
	if(matrixResoulved_esTriangular(variable)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable = [[0,3,2],[2],[2,1]];
	if(matrixResoulved_esTriangular(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable = [[1,2,1],[0,1,0],[0,0,3]];
	if(!matrixResoulved_esTriangular(variable)){
		correcto = false;
		console.log("Falla test 3");
	}

	variable = [[1,3,4,4],[0,1,2,0],[0,0,1,3],[0,0,0,1]];
	if(!matrixResoulved_esTriangular(variable)){
		correcto = false;
		console.log("Falla test 4");
	}

	variable = [[1,0,0,0],[2,1,0,0],[2,1,1,0],[1,3,3,1]];
	if(!matrixResoulved_esTriangular(variable)){
		correcto = false;
		console.log("Falla test 5");
	}

	return correcto;
};



/**
 * VERIFICAR MATRICES EQUIDIMENSIONALES
 * Test unitario para matrixResoulved_sonEquidimensionales(matriz).
 * Unitary test for matrixResoulved_sonEquidimensionales(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_sonEquidimensionales(matriz)
 */
function testRex_matrixResoulved_sonEquidimensionales(){
	
	var correcto = true;
	var variable1, variable2;

	variable1 = [[0],[2],[1]];
	variable2 = [[0,6],[2,5],[1,5]];
	if(matrixResoulved_sonEquidimensionales(variable1, variable2)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable1 = [[0,2],[2,3],[1,4]];
	variable2 = [[0],[2],[1]];
	if(matrixResoulved_sonEquidimensionales(variable1, variable2)){
		correcto = false;
		console.log("Falla test 2");
	}

	variable1 = [[0],[2],[1]];
	variable2 = [[0,2],[2],[1]];
	if(matrixResoulved_sonEquidimensionales(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable1 = ['algo',[2],[1]];
	variable2 = [[0],[2],[1]];
	if(matrixResoulved_sonEquidimensionales(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 4");
	}

	variable1 = [[0,2],[9,2],[4,1]];
	variable2 = [[0,4],[2,6],[1,3]];
	if(!matrixResoulved_sonEquidimensionales(variable1, variable2)){
		correcto = false;
		console.log("Falla test 5");
	}

	return correcto;
};



/**
 * VERIFICAR MATRICES MULTIPLICABLES
 * Test unitario para matrixResoulved_sonMultiplicables(matriz).
 * Unitary test for matrixResoulved_sonMultiplicables(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_sonMultiplicables(matriz)
 */
function testRex_matrixResoulved_sonMultiplicables(){
	
	var correcto = true;
	var variable1, variable2;

	variable1 = [[0],[2],[1]];
	variable2 = [[0,6],[2,5],[1,5]];
	if(matrixResoulved_sonMultiplicables(variable1, variable2)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable1 = [[0,2],[2,3],[1,4]];
	variable2 = [[0],[2],[1]];
	if(matrixResoulved_sonMultiplicables(variable1, variable2)){
		correcto = false;
		console.log("Falla test 2");
	}

	variable1 = [[0],[2],[1]];
	variable2 = [[0,2],[2],[1]];
	if(matrixResoulved_sonMultiplicables(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable1 = ['algo',[2],[1]];
	variable2 = [[0],[2],[1]];
	if(matrixResoulved_sonMultiplicables(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 4");
	}

	variable1 = [[0,2],[9,2],[4,1]];
	variable2 = [[0,4],[6,1]];
	if(matrixResoulved_sonMultiplicables(variable1, variable2)){
		correcto = false;
		console.log("Falla test 5");
	}

	variable1 = [[0,2,3],[9,2,3],[4,1,3],[4,3,2]];
	variable2 = [[0,4,2],[6,1,3]];
	if(matrixResoulved_sonMultiplicables(variable1, variable2)){
		correcto = false;
		console.log("Falla test 6");
	}

	variable1 = [[0,2],[9,2],[4,1]];
	variable2 = [[0,4,2],[6,1,3]];
	if(!matrixResoulved_sonMultiplicables(variable1, variable2)){
		correcto = false;
		console.log("Falla test 7");
	}

	variable1 = [[0,4,2],[6,1,3]];
	variable2 = [[0,2],[9,2],[4,1]];
	if(!matrixResoulved_sonMultiplicables(variable1, variable2)){
		correcto = false;
		console.log("Falla test 8");
	}

	return correcto;
};


/**
 * COMPARAR MATRICES
 * Test unitario para matrixResoulved_compararMatrices(matriz).
 * Unitary test for matrixResoulved_compararMatrices(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_compararMatrices(matriz)
 */
function testRex_matrixResoulved_compararMatrices(){
	
	var correcto = true;
	var variable1, variable2, resultado;

	variable1 = [[0],[2],[1]];
	variable2 = [[0,6],[2,5],[1,5]];
	if(matrixResoulved_compararMatrices(variable1, variable2)){
		correcto = false;
		console.log("Falla test 1");
	}

	variable1 = [[0,2],[2,3],[1,4]];
	variable2 = [[0],[2],[1]];
	if(matrixResoulved_compararMatrices(variable1, variable2)){
		correcto = false;
		console.log("Falla test 2");
	}

	variable1 = [[0],[2],[1]];
	variable2 = [[0,2],[2],[1]];
	if(matrixResoulved_compararMatrices(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable1 = [[1],[2],[3]];
	variable2 = [[3],[2],[1]];
	if(false){
		correcto = false;
		console.log("Falla test 4");
	}

	variable1 = [[4,1],[4,3],[4,5]];
	resultado = [[4,1],[4,3],[4,5]];
	if(false){
		correcto = false;
		console.log("Falla test 5");
	}

	return correcto;
};





/******* OPERACIONES *******/


/**
 * SUMAR MATRICES
 * Test unitario para matrixResoulved_sumarMatrices(matriz).
 * Unitary test for matrixResoulved_sumarMatrices(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_sumarMatrices(matriz)
 */
function testRex_matrixResoulved_sumarMatrices(){
	
	var correcto = true;
	var variable1, variable2, resultado;

	variable1 = [[0],[2],[1]];
	variable2 = [[0,6],[2,5],[1,5]];
	if(matrixResoulved_sumarMatrices(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 1");
	}

	variable1 = [[0,2],[2,3],[1,4]];
	variable2 = [[0],[2],[1]];
	if(matrixResoulved_sumarMatrices(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable1 = [[0],[2],[1]];
	variable2 = [[0,2],[2],[1]];
	if(matrixResoulved_sumarMatrices(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable1 = [[1],[2],[3]];
	variable2 = [[3],[2],[1]];
	resultado = [[4],[4],[4]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_sumarMatrices(variable1, variable2)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 4");
	}

	variable1 = [[1,0],[2,1],[3,2]];
	variable2 = [[3,1],[2,2],[1,3]];
	resultado = [[4,1],[4,3],[4,5]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_sumarMatrices(variable1, variable2)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 5");
	}

	return correcto;
};


/**
 * MATRIZ POR NÚMERO
 * Test unitario para matrixResoulved_matrizPorNumero(matriz, numero).
 * Unitary test for matrixResoulved_matrizPorNumero(matriz, numero).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_matrizPorNumero(matriz, numero)
 */
function testRex_matrixResoulved_matrizPorNumero(){
	
	var correcto = true;
	var variable1, variable2, resultado;

	variable1 = [[0],[2],[1]];
	variable2 = "aalaa";
	if(matrixResoulved_matrizPorNumero(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 1");
	}

	variable1 = [[0,2],[2],[1,4]];
	variable2 = 2;
	if(matrixResoulved_matrizPorNumero(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable1 = [[0],[2,3],[1]];
	variable2 = 3;
	if(matrixResoulved_matrizPorNumero(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable1 = [[1],[2],[3]];
	variable2 = 3;
	resultado = [[3],[6],[9]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_matrizPorNumero(variable1, variable2)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 4");
	}

	variable1 = [[1,0],[2,1],[3,2]];
	variable2 = 2;
	resultado = [[2,0],[4,2],[6,4]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_matrizPorNumero(variable1, variable2)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 5");
	}

	return correcto;
};


/**
 * MATRIZ POR MATRIZ
 * Test unitario para matrixResoulved_matrizPorMatriz(matriz, matriz).
 * Unitary test for matrixResoulved_matrizPorMatriz(matriz, matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_matrizPorMatriz(matriz, matriz)
 */
function testRex_matrixResoulved_matrizPorMatriz(){
	
	var correcto = true;
	var variable1, variable2, resultado;

	variable1 = [[0],[2],[1]];
	variable2 = "aalaa";
	if(matrixResoulved_matrizPorMatriz(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 1");
	}

	variable1 = [[0,2],[2],[1,4]];
	variable2 = 2;
	if(matrixResoulved_matrizPorMatriz(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable1 = [[0],[2,3],[1]];
	variable2 = 3;
	if(matrixResoulved_matrizPorMatriz(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable1 = [[1],[2],[3]];
	variable2 = [[0,2]];
	if(matrixResoulved_matrizPorMatriz(variable1, variable2) != null){
		correcto = false;
		console.log("Falla test 4");
	}


	variable1 = [[2,1],[0,3],[1,0]];
	variable2 = [[1,0,0],[3,4,2]];
	resultado = [[5,4,2],[9,12,6],[1,0,0]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_matrizPorMatriz(variable1, variable2)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 5");
	}

	variable1 = [[1,0,0],[3,4,2]];
	variable2 = [[2,1],[0,3],[1,0]];
	resultado = [[2,1],[8,15]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_matrizPorMatriz(variable1, variable2)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 6");
	}

	return correcto;
};


/**
 * ADJUNTO DE MATRIZ
 * Test unitario para matrixResoulved_adjuntoMatriz(matriz, iAdjunto, jAdjunto).
 * Unitary test for matrixResoulved_adjuntoMatriz(matriz, iAdjunto, jAdjunto).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_adjuntoMatriz(matriz, iAdjunto, jAdjunto)
 */
function testRex_matrixResoulved_adjuntoMatriz(){
	
	var correcto = true;
	var variable1, variable2, variable3, resultado;

	variable1 = [[0,3],[2,2],[1,1]];
	variable2 = 2;
	variable3 = "aalaa";
	if(matrixResoulved_adjuntoMatriz(variable1, variable2, variable3) != null){
		correcto = false;
		console.log("Falla test 1");
	}

	variable1 = [[0],[2,3],[1,4]];
	variable2 = 2;
	variable3 = 2;
	if(matrixResoulved_adjuntoMatriz(variable1, variable2, variable3) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable1 = [[0],[2],[1]];
	variable2 = 0;
	variable3 = 0;
	if(matrixResoulved_adjuntoMatriz(variable1, variable2, variable3) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable1 = [[1,2],[2,3],[3,4]];
	variable2 = 4;
	variable3 = 2;
	if(matrixResoulved_adjuntoMatriz(variable1, variable2, variable3) != null){
		correcto = false;
		console.log("Falla test 4");
	}


	variable1 = [[2,1],[0,3],[1,0]];
	variable2 = 0;
	variable3 = 0;
	resultado = [[3],[0]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_adjuntoMatriz(variable1, variable2, variable3)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 5");
	}

	variable1 = [[1,0,0],[3,4,2],[0,0,1]];
	variable2 = 2;
	variable3 = 2;
	resultado = [[1,0],[3,4]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_adjuntoMatriz(variable1, variable2, variable3)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 6");
	}

	return correcto;
};


/**
 * VECTOR UNIDIMENSIONAL DE MATRIZ
 * Test unitario para matrixResoulved_vectorUnidimensionalMatriz(matriz).
 * Unitary test for matrixResoulved_vectorUnidimensionalMatriz(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_vectorUnidimensionalMatriz(matriz)
 */
function testRex_matrixResoulved_vectorUnidimensionalMatriz(){
	
	var correcto = true;
	var variable1, resultado;

	variable = [[0,3,2],[2,1,1]];
	if(matrixResoulved_vectorUnidimensionalMatriz(variable) != null){
		correcto = false;
		console.log("Falla test 1");
	}

	variable = [[0],[2,3],[1,4]];
	if(matrixResoulved_vectorUnidimensionalMatriz(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable = [[0],[2],[1]];
	if(matrixResoulved_vectorUnidimensionalMatriz(variable) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable = [[3,0,0],[0,3,0],[0,0,3]];
	resultado = [[3,0,0],[0,3,0],[0,0,3]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_vectorUnidimensionalMatriz(variable)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 4");
	}

	variable = [[2,3,3,6],[2,3,6,7],[4,4,0,3],[2,5,2,3]];
	resultado = [[2,0,0,0],[2,0,3,1],[4,-2,-6,-9],[2,2,-1,-3]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_vectorUnidimensionalMatriz(variable)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 5");
	}

	variable = [[1,4,4,0],[0,4,2,2],[0,0,1,3],[0,0,0,1]];
	resultado = [[1,0,0,0],[0,4,2,2],[0,0,1,3],[0,0,0,1]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_vectorUnidimensionalMatriz(variable)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 6");
	}

	variable = [[0,0,0,1],[1,4,4,0],[0,4,2,2],[0,0,1,3]];
	resultado = [[0,0,0,1],[1,4,4,0],[0,4,2,2],[0,0,1,3]];
	if(
		!matrixResoulved_compararMatrices(
			matrixResoulved_vectorUnidimensionalMatriz(variable)
			, resultado
		)
	){
		correcto = false;
		console.log("Falla test 7");
	}

	return correcto;
};


/**
 * DETERMINANTE DE MATRIZ
 * Test unitario para matrixResoulved_determinanteMatriz(matriz).
 * Unitary test for matrixResoulved_determinanteMatriz(matriz).
 * 
 * @return boolean
 * @see matrixResoulved.js/matrixResoulved_determinanteMatriz(matriz)
 */
function testRex_matrixResoulved_determinanteMatriz(){
	
	var correcto = true;
	var variable1, resultado;

	variable = [[0,3],[2,2],[1,1]];
	if(matrixResoulved_determinanteMatriz(variable) != null){
		correcto = false;
		console.log("Falla test 1");
	}

	variable = [[0],[2,3],[1,4]];
	if(matrixResoulved_determinanteMatriz(variable) != null){
		correcto = false;
		console.log("Falla test 2");
	}

	variable = [[0],[2],[1]];
	if(matrixResoulved_determinanteMatriz(variable) != null){
		correcto = false;
		console.log("Falla test 3");
	}

	variable = [[1,2],[2,3],[3,4]];
	if(matrixResoulved_determinanteMatriz(variable) != null){
		correcto = false;
		console.log("Falla test 4");
	}


	variable = [[3,0,0],[0,-3,0],[0,0,3]];
	resultado = -27;
	if(matrixResoulved_determinanteMatriz(variable) != resultado){
		correcto = false;
		console.log("Falla test 5");
		console.log("Deseado - "+JSON.stringify(resultado));
		console.log("Obtenido - "+JSON.stringify(matrixResoulved_determinanteMatriz(variable)));
	}

	variable = [[2,3,3,6],[2,3,6,7],[4,4,0,3],[2,5,2,3]];
	resultado = 116;
	if(matrixResoulved_determinanteMatriz(variable) != resultado){
		correcto = false;
		console.log("Falla test 6");
		console.log("Deseado - "+JSON.stringify(resultado));
		console.log("Obtenido - "+JSON.stringify(matrixResoulved_determinanteMatriz(variable)));
	}

	variable = [[1,4,4,0],[0,4,2,2],[0,0,1,3],[0,0,0,1]];
	resultado = 4;
	if(matrixResoulved_determinanteMatriz(variable) != resultado){
		correcto = false;
		console.log("Falla test 7");
		console.log("Deseado - "+JSON.stringify(resultado));
		console.log("Obtenido - "+JSON.stringify(matrixResoulved_determinanteMatriz(variable)));
	}

	return correcto;
};
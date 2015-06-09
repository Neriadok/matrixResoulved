/**
 * Esta librería tiene en mente resolver todos los problemas de matrices que puedas encontrar.
 * This library has in mind to solve all matrix problems you can find.
 * 
 * @author Neriadok-DanielMartínDíaz
 * @version 1.0 - 04/06/2015
 */



/******* COMPROBACIONES *******/

/**
 * VERIFICAR MATRIZ
 * Función que comprueba que una variable sea una matriz.
 * Function that finds if a variable is a matrix.
 * 
 * @param matriz undefined
 * @return boolean
 */
function matrixResoulved_esMatriz(variable){
	
	/**
	 * Verificamos que la variable tiene longitud.
	 * 
	 */
	if(variable.length != null){
		/**
		 * Verificamos que, además, la primera coordenada también tenga longitud.
		 * We verify if also variable's first coordenate has length. 
		 */
		if(variable[0].length != null){
			var esMatriz = true;
			
			var longitudPrimeraFila = variable[0].length;
			
			/**
			 * Recorremos cada fila tras la primera mientras la variable sea una matriz.
			 * We go over each row after first one while variable is a matrix.
			 */
			for(var i = 1; i < variable.length && esMatriz; i++){
				/**
				 * Verificamos que la coordenada también tenga longitud.
				 * We verify coordenate has length. 
				 */
				if(variable[i].length == null){
					esMatriz = false;
				}
				
				/**
				 * Verificamos que tenga la misma longitud que la primera coordenada.
				 * We verify coordenate has same length as the first.
				 */
				else if(variable[i].length != longitudPrimeraFila){
					esMatriz = false;
				}
				
				/**
				 * Verificamos que el contenido de las coordenadas sea un número.
				 * We verify all row's coordenates are numbers.
				 */
				else{
					for(var j = 0; j < variable[i].length && esMatriz; j++){
						/**
						 * La convertimos en número por si no lo fuese ya.
						 * We parse it into a number if it's not.
						 */
						variable[i][j] = parseFloat(variable[i][j]);
						if(isNaN(variable[i][j])){
							esMatriz = false;
						}
					}
				}
			}
			
			return esMatriz;
		}
		
		/**
		 * Si la primera coordenada de la variable no tuviese longitud, la variable no puede ser una matriz.
		 * If variable's first coordenate has no length, variable can't be a matrix.
		 */
		else{
			return false;
		}
	}
	
	/**
	 * Si la variable no tuviese longitud, no puede ser una matriz.
	 * If variable has no length, it can't be a matrix.
	 */
	else{
		return false;
	}
};



/**
 * VERIFICAR MATRIZ NULA
 * Función que comprueba si una matriz es nula.
 * Function that finds if a matrix is null.
 * 
 * @param matriz float Array Array
 * @return boolean
 */
function matrixResoulved_esNula(matriz){
	
	var matrizNula = true;
	
	/**
	 * Verificamos que estamos tratando una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Recorremos cada fila mientras la matriz sea nula
		 * We go over each row while matrix is null
		 */
		for(var i = 0; i < matriz.length && matrizNula; i++){
			/**
			 * Recorremos cada columna de la fila mientras la matriz sea nula
			 * We go over each row's column while matrix is null
			 */
			for(var j = 0; j < matriz[i].length && matrizNula; j++){
				/**
				 * Si el valor de la coordenada es distinto de 0, significa que la matriz no es nula.
				 * If coordenate value is different from 0, the matrix is not null.
				 */
				if(matriz[i][j] != 0){
					matrizNula = false;
				}
			}
		}
	}

	/**
	 * Si no es una matriz, devolvemos null.
	 * If's not a matrix, we return null.
	 */
	else{
		return null;
	}
	
	return matrizNula;
};



/**
 * VERIFICAR MATRIZ CUADRADA
 * Función que comprueba si una matriz es cuadrada.
 * Function that finds if a matrix is square.
 * 
 * @param matriz float Array Array
 * @return boolean
 */
function matrixResoulved_esCuadrada(matriz){
	
	var matrizCuadrada = true;
	
	/**
	 * Verificamos que estamos tratando una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Verificamos que el número de filas es igual al de columnas.
		 * We verify if number of columns equals number of rows.
		 */
		if(matriz.length != matriz[0].length){
			matrizCuadrada = false;
		}
	}

	/**
	 * Si no es una matriz, devolvemos null.
	 * If's not a matrix, we return null.
	 */
	else{
		return null;
	}
	
	return matrizCuadrada;
};



/**
 * VERIFICAR MATRIZ DIAGONAL
 * Función que comprueba si una matriz es diagonal.
 * Function that finds if a matrix is diagonal.
 * 
 * @param matriz float Array Array
 * @return boolean
 */
function matrixResoulved_esDiagonal(matriz){
	
	var matrizDiagonal;
	
	/**
	 * Verificamos que estamos tratando una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Verificamos que sea una matriz cuadrada.
		 * We verify if it's a square matrix.
		 */
		if(matrixResoulved_esCuadrada(matriz)){
			/**
			 * Verificamos que la matriz sea al mismo tiempo triangular inferior y superior
			 * We verify the matrix is at the same time inferior triangular and superior triangular
			 */
			if(matrixResoulved_esTriangularSuperior(matriz) && matrixResoulved_esTriangularInferior(matriz)){
				matrizDiagonal = true;
			}
			
			else{
				matrizDiagonal = false;
			}
		}
		
		/**
		 * Si no es cuadrada, devolvemos false.
		 * If it's not square, we return false.
		 */
		else{
			matrizDiagonal = false;
		}
	}

	/**
	 * Si no es una matriz, devolvemos null.
	 * If's not a matrix, we return null.
	 */
	else{
		return null;
	}
	
	return matrizDiagonal;
};



/**
 * VERIFICAR MATRIZ UNIDAD
 * Función que comprueba si una matriz es una matriz unidad.
 * Function that finds if a matrix is a unity matrix.
 * 
 * @param matriz float Array Array
 * @return boolean
 */
function matrixResoulved_esUnidad(matriz){
	
	var matrizUnidad = true;
	
	/**
	 * Verificamos que estamos tratando una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Verificamos que sea una matriz diagonal.
		 * We verify if it's a diagonal matrix.
		 */
		if(matrixResoulved_esDiagonal(matriz)){
			/**
			 * Recorremos la matriz mientras la matriz sea unidad.
			 * We go over the matrix while matrix is unity.
			 */
			for(var i = 0; i < matriz.length && matrizUnidad; i++){
				/**
				 * Recorremos cada coordenada con fila y columna iguales mientras la matriz sea unidad
				 * We go over each coordenate with same row and column while matrix is unity
				 */
				if(matriz[i][i] != 1){
					matrizUnidad = false;
				}
			}
		}
		
		/**
		 * Si no es diagonal, devolvemos false.
		 * If it's not diagonal, we return false.
		 */
		else{
			matrizUnidad = false;
		}
	}

	/**
	 * Si no es una matriz, devolvemos null.
	 * If's not a matrix, we return null.
	 */
	else{
		return null;
	}
	
	return matrizUnidad;
};



/**
 * VERIFICAR MATRIZ TRIANGULAR SUPERIOR
 * Función que comprueba si una matriz es triangular superior.
 * Function that finds if a matrix is triangular.
 * 
 * @param matriz float Array Array
 * @return boolean
 */
function matrixResoulved_esTriangularSuperior(matriz){

	var matrizTriangularSuperior = true;
	
	/**
	 * Verificamos que estamos tratando una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Verificamos que sea una matriz cuadrada.
		 * We verify if it's a square matrix.
		 */
		if(matrixResoulved_esCuadrada(matriz)){
			/**
			 * Recorremos cada fila mientras la matriz sea diagonal
			 * We go over each row while matrix is diagonal
			 */
			for(var i = 0; i < matriz.length && matrizTriangularSuperior; i++){
				/**
				 * Recorremos cada columna de la fila mientras la matriz sea diagonal.
				 * We go over each row's column while matrix is diagonal.
				 */
				for(var j = 0; j < matriz[i].length && matrizTriangularSuperior; j++){
					
					/**
					 * Verificamos que el valor de la coordenada sea 0.
					 * We verify coordenate's value it's 0.
					 */
					if(matriz[i][j] != 0){
						
						/**
						 * Verificamos que la fila sea mayor la columna para matrices triangulares superiores.
						 * We verify row is over column for superior triangular matrix.
						 */
						if(i > j){
							matrizTriangularSuperior = false;
						}
					}
				}
			}
		}
		
		/**
		 * Si no es cuadrada, devolvemos false.
		 * If it's not square, we return false.
		 */
		else{
			return false;
		}
	}

	/**
	 * Si no es una matriz, devolvemos null.
	 * If's not a matrix, we return null.
	 */
	else{
		return null;
	}
	
	return matrizTriangularSuperior;
};



/**
 * VERIFICAR MATRIZ TRIANGULAR INFERIOR
 * Función que comprueba si una matriz es triangular inferior.
 * Function that finds if a matrix is triangular.
 * 
 * @param matriz float Array Array
 * @return boolean
 */
function matrixResoulved_esTriangularInferior(matriz){

	var matrizTriangularInferior = true;
	
	/**
	 * Verificamos que estamos tratando una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Verificamos que sea una matriz cuadrada.
		 * We verify if it's a square matrix.
		 */
		if(matrixResoulved_esCuadrada(matriz)){
			/**
			 * Recorremos cada fila mientras la matriz sea diagonal
			 * We go over each row while matrix is diagonal
			 */
			for(var i = 0; i < matriz.length && matrizTriangularInferior; i++){
				/**
				 * Recorremos cada columna de la fila mientras la matriz sea diagonal.
				 * We go over each row's column while matrix is diagonal.
				 */
				for(var j = 0; j < matriz[i].length && matrizTriangularInferior; j++){
					
					/**
					 * Verificamos que el valor de la coordenada sea 0.
					 * We verify coordenate's value it's 0.
					 */
					if(matriz[i][j] != 0){
						/**
						 * Verificamos que la fila sea menor la columna para matrices triangulares inferiores.
						 * We verify row is below column for inferior triangular matrix.
						 */
						if(i < j){
							matrizTriangularInferior = false;
						}
					}
				}
			}
		}
		
		/**
		 * Si no es cuadrada, devolvemos false.
		 * If it's not square, we return false.
		 */
		else{
			return false;
		}
	}

	/**
	 * Si no es una matriz, devolvemos null.
	 * If's not a matrix, we return null.
	 */
	else{
		return null;
	}
	
	return matrizTriangularInferior;
};



/**
 * VERIFICAR MATRIZ TRIANGULAR
 * Función que comprueba si una matriz es triangular.
 * Function that finds if a matrix is triangular.
 * 
 * @param matriz float Array Array
 * @return boolean
 */
function matrixResoulved_esTriangular(matriz){
	
	var matrizTriangular;
	
	/**
	 * Verificamos que estamos tratando una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Verificamos que sea una matriz cuadrada.
		 * We verify if it's a square matrix.
		 */
		if(matrixResoulved_esCuadrada(matriz)){
			/**
			 * Verificamos que la matriz sea triangular inferior o superior
			 * We verify the matrix is inferior triangular or superior triangular
			 */
			if(matrixResoulved_esTriangularSuperior(matriz) || matrixResoulved_esTriangularInferior(matriz)){
				matrizTriangular = true;
			}
			
			else{
				matrizTriangular = false;
			}
		}
		
		/**
		 * Si no es cuadrada, devolvemos false.
		 * If it's not square, we return false.
		 */
		else{
			matrizTriangular = false;
		}
	}

	/**
	 * Si no es una matriz, devolvemos null.
	 * If's not a matrix, we return null.
	 */
	else{
		return null;
	}
	
	return matrizTriangular;
};



/**
 * VERIFICAR MATRICES EQUIDIMENSIONALES
 * Función que comprueba si una matriz tiene las mismas dimensiones que otra.
 * Function that finds if a matrix has the same dimensions than other.
 * 
 * @param matriz1 float Array Array
 * @param matriz2 float Array Array
 * @return boolean
 */
function matrixResoulved_sonEquidimensionales(matriz1, matriz2){
	var sonEquidimensionales = true;
	
	/**
	 * Verificamos que ambas matrices sean, en efecto, matrices.
	 * We verify both matirx are, in did, matrix.
	 */
	if(matrixResoulved_esMatriz(matriz1) && matrixResoulved_esMatriz(matriz2)){
		/**
		 * Verificamos el número de filas.
		 * We verify number of rows.
		 */
		if(matriz1.length != matriz2.length){
			sonEquidimensionales = false;
		}
		
		/**
		 * Verificamos el número de columnas.
		 * We verify number of columns.
		 */
		if(matriz1[0].length != matriz2[0].length){
			sonEquidimensionales = false;
		}
	}
	
	/**
	 * En caso de que una de ellas no sea matriz, retornamos null.
	 * If one of them is not a matrix, we return null.
	 */
	else{
		sonEquidimensionales = null;
	}
	
	return sonEquidimensionales;
};



/**
 * VERIFICAR MATRICES MULTIPLICABLES
 * Función que comprueba si una matriz es multiplicable por otra.
 * Function that finds if a matrix can be multiply by other.
 * 
 * @param matriz1 float Array Array
 * @param matriz2 float Array Array
 * @return boolean
 */
function matrixResoulved_sonMultiplicables(matriz1, matriz2){
	var sonMultiplicables = true;
	
	/**
	 * Verificamos que ambas matrices sean, en efecto, matrices.
	 * We verify both matirx are, in did, matrix.
	 */
	if(matrixResoulved_esMatriz(matriz1) && matrixResoulved_esMatriz(matriz2)){
		/**
		 * Comparamos columnas de la primera con filas de la segunda.
		 * We compare first matrix's columns with second matrix's rows.
		 */
		if(matriz1.length != matriz2[0].length){
			sonMultiplicables = false;
		}
	}
	
	/**
	 * En caso de que una de ellas no sea matriz, retornamos null.
	 * If one of them is not a matrix, we return null.
	 */
	else{
		sonMultiplicables = null;
	}
	
	return sonMultiplicables;
};

/**
 * COMPARAR MATRICES
 * Función que compara dos matrices.
 * Function which adds two matrix.
 * 
 * @param matriz1 float Array Array
 * @param matriz2 float Array Array
 * @return boolean
 */
function matrixResoulved_compararMatrices(matriz1, matriz2){
	var sonIguales = true;
	
	/**
	 * Veríficamos que ambas son, en efecto, matrices.
	 * We verify if, in did, both are matrix.
	 */
	if(matrixResoulved_esMatriz(matriz1) && matrixResoulved_esMatriz(matriz2)){
		/**
		 * Verificamos que son equidimensionales.
		 * We verify if both has same dimensions.
		 */
		if(matrixResoulved_sonEquidimensionales(matriz1,matriz2)){
			/**
			 * Recorremos cada fila.
			 * We go over each row.
			 */
			for(var i = 0; i < matriz1.length && sonIguales; i++){
				/**
				 * Recorremos cada columna.
				 * We go over each column.
				 */
				for(var j = 0; j < matriz1[0].length && sonIguales; j++){
					/**
					 * Comparamos los valores de las coordenadas homologas.
					 * We compare values with same coordenates.
					 */
					if(matriz1[i][j] != matriz2[i][j]){
						sonIguales = false;
					}
				}
			}
		}
		
		/**
		 * Si no fueran equidimensionales, retornamos false.
		 * If they have different dimensions, we return false.
		 */
		else{
			sonIguales = false;
		}
		
		/**
		 * Retornamos el resultado.
		 * We return the result.
		 */
		return sonIguales;
	}
	
	/**
	 * Si alguna no fuera una matriz, retornamos null.
	 * If one's not a matrix, we return null.
	 */
	else{
		return null;
	}
};





/******* OPERACIONES *******/


/**
 * SUMAR MATRICES
 * Función que suma dos matrices.
 * Function which adds two matrix.
 * 
 * @param matriz1 float Array Array
 * @param matriz2 float Array Array
 * @return matrix
 */
function matrixResoulved_sumarMatrices(matriz1, matriz2){
	/**
	 * Veríficamos que ambas son, en efecto, matrices.
	 * We verify if, in did, both are matrix.
	 */
	if(matrixResoulved_esMatriz(matriz1) && matrixResoulved_esMatriz(matriz2)){
		/**
		 * Verificamos que son equidimensionales.
		 * We verify if both has same dimensions.
		 */
		if(matrixResoulved_sonEquidimensionales(matriz1,matriz2)){
			/**
			 * Generamos las filas.
			 * We generate the rows.
			 */
			var resultado = [];
			
			/**
			 * Recorremos cada fila.
			 * We go over each row.
			 */
			for(var i = 0; i < matriz1.length; i++){
				/**
				 * Generamos las columnas.
				 * We generate the columns.
				 */
				resultado[i] = [];
				
				/**
				 * Recorremos cada columna.
				 * We go over each column.
				 */
				for(var j = 0; j < matriz1[0].length; j++){
					/**
					 * Sumamos los valores de las coordenadas homologas.
					 * We add values with same coordenates.
					 */
					resultado[i][j] = parseFloat(matriz1[i][j] + matriz2[i][j]);
				}
			}
			
			/**
			 * Retornamos el resultado.
			 * We return the result.
			 */
			return resultado;
		}
		
		/**
		 * Si no fueran equidimensionales, retornamos null.
		 * If they have different dimensions, we return null.
		 */
		else{
			return null;
		}
	}
	
	/**
	 * Si alguna no fuera una matriz, retornamos null.
	 * If one's not a matrix, we return null.
	 */
	else{
		return null;
	}
};


/**
 * MATRIZ POR NÚMERO
 * Función multiplica una matriz por un número.
 * Function which multiply a matrix by a number.
 * 
 * @param matriz float Array Array
 * @param numero float
 * @return matrix
 */
function matrixResoulved_matrizPorNumero(matriz, numero){
	/**
	 * Veríficamos que ambas son, en efecto, matrices.
	 * We verify if, in did, both are matrix.
	 */
	if(matrixResoulved_esMatriz(matriz) && !isNaN(parseFloat(numero))){
		
		/**
		 * Recorremos cada fila.
		 * We go over each row.
		 */
		for(var i = 0; i < matriz.length; i++){
			
			/**
			 * Recorremos cada columna.
			 * We go over each column.
			 */
			for(var j = 0; j < matriz[0].length; j++){
				/**
				 * Multiplicamos el valor de la coordenada por el número.
				 * We multiply the coordenate value by the number.
				 */
				matriz[i][j] *= numero;
			}
		}
		
		/**
		 * Retornamos el resultado.
		 * We return the result.
		 */
		return matriz;
	}
	
	/**
	 * Si alguna no fuera una matriz, retornamos null.
	 * If one's not a matrix, we return null.
	 */
	else{
		return null;
	}
};


/**
 * MATRIZ POR MATRIZ
 * Función multiplica una matriz por otra.
 * Function which multiply a matrix by another.
 * 
 * @param matriz1 float Array Array
 * @param matriz2 float Array Array
 * @return matrix
 */
function matrixResoulved_matrizPorMatriz(matriz1, matriz2){
	/**
	 * Veríficamos que ambas son, en efecto, matrices.
	 * We verify if, in did, both are matrix.
	 */
	if(matrixResoulved_esMatriz(matriz1) && matrixResoulved_esMatriz(matriz2)){
		/**
		 * Verificamos que son multiplicables.
		 * We verify they can be multiplicated.
		 */
		if(matrixResoulved_sonMultiplicables(matriz1,matriz2)){
			/**
			 * Generamos las filas.
			 * We generate the rows.
			 */
			var resultado = [];
			
			/**
			 * Recorremos cada fila primera matriz.
			 * We go over each row.
			 */
			for(var i = 0; i < matriz1.length; i++){
				/**
				 * Generamos las columnas.
				 * We generate the columns.
				 */
				resultado[i] = [];
				
				/**
				 * Recorremos cada columna de la segunda matriz.
				 * We go over each column.
				 */
				for(var j = 0; j < matriz2[0].length; j++){
					/**
					 * Establecemos el valor de la coordenada como 0.
					 * We set coordenate value as 0.
					 */
					resultado[i][j] = 0;
					
					/**
					 * Recorremos las columnas de la primera matriz y las filas de la segunda.
					 * We go over first matrix's columns and second matrix's rows
					 */
					for(var k = 0; k < matriz1[0].length; k++){
						/**
						 * Añadimos al resultado el producto de las coordenadas cuya columna en la primera matriz y fila en la segunda coinciden.
						 * We add to the result the product of coordenates which's column in first matrix and row on seconds match.
						 */
						resultado[i][j] += matriz1[i][k]*matriz2[k][j];
					}
				}
			}
			
			/**
			 * Retornamos el resultado.
			 * We return the result.
			 */
			return resultado;
		}
		
		/**
		 * Si no fueran equidimensionales, retornamos null.
		 * If they have different dimensions, we return null.
		 */
		else{
			return null;
		}
	}
	
	/**
	 * Si alguna no fuera una matriz, retornamos null.
	 * If one's not a matrix, we return null.
	 */
	else{
		return null;
	}
};


/**
 * ADJUNTO DE MATRIZ
 * Función que retorna una matriz adjunta dadas unas coordenadas y la matriz original.
 * Function which finds the adjunted matix given the coordenates and the original matrix.
 * 
 * @param matriz float Array Array
 * @param iAdjunto integer
 * @param jAdjunto integer
 * @return matrix
 */
function matrixResoulved_adjuntoMatriz(matriz, iAdjunto, jAdjunto){
	iAdjunto = parseInt(iAdjunto);
	jAdjunto = parseInt(jAdjunto);
	
	/**
	 * Veríficamos que se trata de una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz) && !isNaN(iAdjunto) && !isNaN(jAdjunto)){
		/**
		 * Verificamos que existe dicho adjunto.
		 * We verify that adjunted exists.
		 */
		if(matriz.length > 1 && matriz[0].length > 1 && iAdjunto < matriz.length && jAdjunto < matriz[0].length){
			/**
			 * Generamos las filas.
			 * We generate the rows.
			 */
			var resultado = [];
			
			/**
			 * Recorremos cada fila de la matriz y vamos generando las del adjunto.
			 * We go over each row.
			 */
			for(var i = 0, filaAdjunto = 0; i < matriz.length; i++){
				/**
				 * Verificamos que no es la fila del adjunto.
				 * We verify it's not the adjunted's row.
				 */
				if(i != iAdjunto){
					/**
					 * Generamos las columnas.
					 * We generate the columns.
					 */
					resultado[filaAdjunto] = [];
					
					/**
					 * Recorremos cada columna de la segunda matriz.
					 * We go over each column.
					 */
					for(var j = 0, columnaAdjunto = 0; j < matriz[0].length; j++){
						/**
						 * Verificamos que no es la columna del adjunto.
						 * We verify it's not the adjunted's column.
						 */
						if(j != jAdjunto){
							/**
							 * Establecemos el valor de la coordenada del adjunto con su homologa en la matriz.
							 * We set coordenate value same as it homologue in the matrix.
							 */
							resultado[filaAdjunto][columnaAdjunto] = matriz[i][j];
						
							columnaAdjunto++;
						}
						
					}
					
					filaAdjunto++;
				}
			}
			
			/**
			 * Retornamos el resultado.
			 * We return the result.
			 */
			return resultado;
		}
		
		/**
		 * Si no existiera el adjunto.
		 * If adjunted doesn't exist.
		 */
		else{
			return null;
		}
	}
	
	/**
	 * Si alguna no fuera una matriz, retornamos null.
	 * If one's not a matrix, we return null.
	 */
	else{
		return null;
	}
};


/**
 * VECTOR UNIDIMENSIONAL DE MATRIZ
 * Función que retorna una matriz cuyo primer vector se desplaza en una única dimensión.
 * Function which returns a matrix which first vector moves in only one dimension.
 * 
 * @param matriz float Array Array
 * @return matrix
 */
function matrixResoulved_vectorUnidimensionalMatriz(matriz){
	
	/**
	 * Veríficamos que se trata de una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Para que esto funcione, el número de filas de la matriz ha de ser igual o mayor al de columnas.
		 * Number of rows must be equal or superior than columns.
		 */
		if(matriz.length >= matriz[0].length){
			
			var columnaDimension = 0;
			
			/**
			 * Necesitamos que el valor de la coordenada que usemos sea distinta de 0.
			 * We need column's value of the coordenate we use to be diferent than 0.
			 */
			while(matriz[0][columnaDimension] == 0 && columnaDimension < matriz[0].length){
				columnaDimension++;
			}
			
			/**
			 * Comprobamos que la columna pertenezca a la matriz.
			 */
			if(columnaDimension != matriz[0].length){
				/**
				 * Generamos la matriz.
				 * We generate the matrix.
				 */
				var resultado = [];
				for(var i = 0; i < matriz.length; i++){
					resultado[i] = [];
					for(var j=0; j < matriz[0].length; j++){
						resultado[i][j] = 0;
					}
				}
				
				/**
				 * Recorremos cada columna de la matriz y vamos generando sus conversiones.
				 * We go over each row.
				 */
				for(var j = 0; j < matriz[0].length; j++){
					
					/**
					 * Recorremos cada fila matriz.
					 * We go over each column.
					 */
					for(var i = 0; i < matriz.length; i++){
						/**
						 * La primera columna permanece igual.
						 * First column don't change.
						 */
						if(j == columnaDimension){
							resultado[i][j] = matriz[i][j];
						}
						
						/**
						 * El valor de una coordenada es el de la coordenada original menos la columna de la dimensión x el factor de conversión.
						 * The coordenate's value is the original coordenate's value minus dimension column's value multiplied by conversion factor. 
						 */
						else{
							factorConversion = matriz[0][j]/matriz[0][columnaDimension];
							resultado[i][j] = matriz[i][j] - matriz[i][columnaDimension] * factorConversion;
						}
					}
				}
				
				/**
				 * Retornamos el resultado.
				 * We return the result.
				 */
				return resultado;
			}

			/**
			 * Si el primer vector es completamente nulo, retornamos null.
			 * If first vector is completly 0, we return null.
			 */
			else{
				return null
			}
		}
		
		/**
		 * Si no existiera el adjunto.
		 * If adjunted doesn't exist.
		 */
		else{
			return null;
		}
	}
	
	/**
	 * Si alguna no fuera una matriz, retornamos null.
	 * If one's not a matrix, we return null.
	 */
	else{
		return null;
	}
};


/**
 * DETERMINANTE DE MATRIZ
 * Función que retorna el determinante de una matriz.
 * Function which finds a matrix's determinant.
 * 
 * @param matriz float Array Array
 * @return integer
 */
function matrixResoulved_determinanteMatriz(matriz){
	/**
	 * Veríficamos que se trata de una matriz.
	 * We verify if it's a matrix.
	 */
	if(matrixResoulved_esMatriz(matriz)){
		/**
		 * Verificamos que existe dicho adjunto.
		 * We verify that adjunted exists.
		 */
		if(matrixResoulved_esCuadrada(matriz)){
			var resultado;
			
			/**
			 * Si la matriz tiene dos dimensiones definimos su determinante.
			 * If the matrix has two dimensions we define his determinant.
			 */
			if(matriz.length == 2){
				resultado = parseFloat(matriz[0][0] * matriz[1][1] - matriz[1][0] * matriz[0][1]);
			}
			
			/**
			 * En caso de tener mas de dos dimensiones procedemos mediante adjuntos.
			 * Other wise, we use adjunteds.
			 */
			else{
				/**
				 * Establecemos un vector unidimensional en la matriz.
				 * We declare an unidimensional vector in the matrix.
				 */
				matriz = matrixResoulved_vectorUnidimensionalMatriz(matriz);
				
				/**
				 * Identificamos la maginitud del vector.
				 * We identify vector's magnitude.
				 */
				var magnitudVectorial = 0;
				var adjunto;
				
				for(var j = 0; j < matriz[0].length && magnitudVectorial == 0; j++){
					if(matriz[0][j] != 0){
						magnitudVectorial = matriz[0][j];
						adjunto = matrixResoulved_adjuntoMatriz(matriz,0,j);
					}
				}
				
				/**
				 * Retornamos el determinante del adjunto multiplicado por la maginitud vectorial
				 */
				resultado = parseFloat(matrixResoulved_determinanteMatriz(adjunto) * magnitudVectorial);
			}
			/**
			 * Retornamos el resultado.
			 * We return the result.
			 */
			return resultado;
		}
		
		/**
		 * Si no existiera el adjunto.
		 * If adjunted doesn't exist.
		 */
		else{
			return null;
		}
	}
	
	/**
	 * Si alguna no fuera una matriz, retornamos null.
	 * If one's not a matrix, we return null.
	 */
	else{
		return null;
	}
};
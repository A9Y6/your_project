<?php
		$dbh = new PDO('mysql:dbname=test_book_list; host=127.0.0.1','root', '');

	
		$sth = $dbh->prepare("SELECT * FROM `books`");
		$sth->execute();
		$books = array();
		while($book = $sth->fetch(PDO::FETCH_ASSOC)){
		array_push($books, $book);
	}
	header('Content-type: application/json');
	echo json_encode($books);	
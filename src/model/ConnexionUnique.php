<?php
/**
 * Created by PhpStorm.
 * User: barth possédé par nicolas
 * Date: 06/12/2018
 * Time: 18:58
 */

class ConnexionUnique {
	/**
	 * connexionUnique constructor.
	 */
	const HOST = 'mysql-crewstillant.alwaysdata.net';
	const IDENTIFIANT = '172806';
	const MDP = 'crew';
	const BD = 'crewstillant_bd';
	private $link;
	private static $instance;
	private function __construct() {
		$this->link = mysqli_connect(ConnexionUnique::HOST,ConnexionUnique::IDENTIFIANT,ConnexionUnique::MDP)
		or die ('Problème de connexion au serveur :' . mysqli_connect_error());
		mysqli_select_db($this->link,ConnexionUnique::BD)
		or die ('Problème de sélection model : ' . mysqli_error($this->link));
	}
	public function getConnexion () {
		return $this->link;
	}
	static public function getInstance () {
		if (null == self::$instance)
			self::$instance = new ConnexionUnique();
		return self::$instance;
	}
}
<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitad4a099ab65be356d165dc7dc4111848
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitad4a099ab65be356d165dc7dc4111848', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitad4a099ab65be356d165dc7dc4111848', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitad4a099ab65be356d165dc7dc4111848::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}

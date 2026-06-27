#!/bin/sh

echo "Running Laravel setup..."

php artisan config:clear
php artisan cache:clear
php artisan migrate --force

echo "Starting Apache..."

exec apache2-foreground
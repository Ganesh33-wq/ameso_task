# Generated by Django 4.2.2 on 2023-06-29 11:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='Title',
            new_name='Taskname',
        ),
    ]
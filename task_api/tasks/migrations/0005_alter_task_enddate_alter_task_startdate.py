# Generated by Django 4.2.2 on 2023-06-29 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_alter_task_enddate_alter_task_startdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='Enddate',
            field=models.CharField(max_length=39, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='Startdate',
            field=models.CharField(max_length=30, null=True),
        ),
    ]

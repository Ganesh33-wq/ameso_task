# Generated by Django 4.2.2 on 2023-06-29 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_rename_title_task_taskname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='Completed',
            field=models.CharField(default=False, max_length=100, null=True),
        ),
    ]
# Generated by Django 2.1.5 on 2019-04-27 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='description',
            field=models.CharField(max_length=256, null=True),
        ),
    ]
